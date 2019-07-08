import context from "../testHelpers";
const themeContext = {
  Consumer(props) {
    return props.children(context);
  }
};

export default themeContext;
