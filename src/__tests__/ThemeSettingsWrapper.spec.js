import React from "react";
import Enzyme, { shallow } from "enzyme";
import ThemeSettingsWrapper from "../ThemeSettingsWrapper";
import context from "../testHelpers";
jest.mock("../context");

describe("ThemeSettingsWrapper", () => {
  it("render render prop", () => {
    // This will use the default context param since we pass nothing
    const wrapper = shallow(<ThemeSettingsWrapper />)
      .find("ThemeSettings")
      .renderProp("buttonRender")(() => {}, "yellow");
    expect(wrapper.find("span").text()).toEqual("!yellow!");
  });
});
