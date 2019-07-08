import ThemeContent from "./context";

import React, { Component } from "react";

export default class ThemeSettings extends Component {
  render() {
    return (
      <ThemeContent.Consumer>
        {({ theme, changeTheme }) => (
          <div>
            <div style={{ color: theme }}>Current Theme: {theme}</div>
            {this.props.buttonRender(changeTheme, "blue")}
            {this.props.buttonRender(changeTheme, "red")}
            {this.props.buttonRender(changeTheme, "pink")}
          </div>
        )}
      </ThemeContent.Consumer>
    );
  }
}
