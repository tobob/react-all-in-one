import moxios from "moxios";

import { pullUrl, normalFetchTodos } from "../actions";

describe("actions", () => {
  beforeEach(function() {
    // import and pass your custom axios instance to this method
    moxios.install();
  });

  afterEach(function() {
    // import and pass your custom axios instance to this method
    moxios.uninstall();
  });

  it("is ok", () => {
    expect(true).toBe(true);
  });

  it("dispatch right data after request", done => {
    const data = [{ title: 1 }, { title: 2 }];
    const dispatch = jest.fn();
    normalFetchTodos()(dispatch);

    moxios.wait(function() {
      let request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 200,
          response: data
        })
        .then(function() {
          expect(dispatch.mock.calls[0][0].payload.data).toEqual(data);
          done();
        });
    });
  });
});
