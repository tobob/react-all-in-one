const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODOS": {
      return [...state, ...action.payload];
    }
    default:
      return state;
  }
};

export default todos;
