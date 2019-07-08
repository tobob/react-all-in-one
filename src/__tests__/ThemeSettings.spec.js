import React from "react";
import Enzyme, { mount } from "enzyme";
import ThemeSettings from "../ThemeSettings";
import context from "../testHelpers";
jest.mock("../context");

describe("ThemeSettings", () => {
  it("returns theme list", () => {
    const wrapper = mount(<ThemeSettings buttonRender={() => <button />} />);
    expect(wrapper.find("button").length).toBe(3);
  });
});
