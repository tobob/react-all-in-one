import React from "react";
import NewComponent from "../NewComponent";
import { shallow } from "enzyme";

let props;

describe("NewComponet", () => {
  beforeEach(() => {
    props = {
      something: "koko",
      callback: jest.fn()
    };
  });

  it("renders well", () => {
    props.something = 1;
    const wrapper = shallow(<NewComponent {...props} />);
    console.log(wrapper);

    expect(wrapper.find("button").text()).toEqual("0");
    expect(props.callback).toHaveBeenCalled();
    expect(wrapper).toMatchSnapshot();
  });

  it("keeps counter state initialy", () => {
    const wrapper = shallow(<NewComponent />);

    expect(wrapper.state("clicked")).toEqual(0);
  });

  it("increase clicked value on onClick event handler", () => {
    const wrapper = shallow(<NewComponent />);

    const aaa = jest.fn();

    wrapper.instance().handleEvent = aaa;
    const button = wrapper.find("button");
    button.simulate("click");
    expect(aaa).toHaveBeenCalled();
  });

  it("increase clicked value on onClick event handler", () => {
    const wrapper = shallow(<NewComponent />);
    const button = wrapper.find("button");
    button.simulate("click");
    expect(wrapper.state("clicked")).toEqual(1);
  });
});
