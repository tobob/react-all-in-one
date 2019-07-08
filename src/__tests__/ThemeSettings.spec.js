import React from "react";
import Enzyme, { mount } from "enzyme";
import ThemeSettings from "../ThemeSettings";
import context from "../testHelpers";
jest.mock("../context");

describe("ThemeSettings", () => {
  it("returns theme list", () => {
    // This will use the default context param since we pass nothing
    const wrapper = mount(<ThemeSettings buttonRender={() => <button />} />);
    expect(wrapper.find("button").length).toBe(3);
  });
});
