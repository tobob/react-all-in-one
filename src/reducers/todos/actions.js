import axios from "axios";

export const pullUrl = page =>
  `https://api.github.com/repos/yarnpkg/yarn/pulls?page=${page}`;

export const fetchTodos = page => dispatch => {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  axios.get(pullUrl(1), { cancelToken: source.token }).then(payload => {
    dispatch({ type: "ADD_TODOS", payload });
  });
  return source;
};

export const normalFetchTodos = page => dispatch => {
  axios.get(pullUrl(1)).then(payload => {
    dispatch({ type: "ADD_TODOS", payload });
  });
};

export const fetchFirst3Pages = () => dispatch => {
  let data = [];

  fetch(pullUrl(2))
    .then(resp => resp.json())
    .then(payload => {
      data = [...data, ...payload];
      fetch(pullUrl(3))
        .then(resp => resp.json())
        .then(payload => {
          data = [...data, ...payload];
          fetch(pullUrl(4))
            .then(resp => resp.json())
            .then(payload => {
              data = [...data, ...payload];
              dispatch({ type: "ADD_TODOS", payload: data });
            });
        });
    });
};
