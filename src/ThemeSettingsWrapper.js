import React, { Component } from "react";
import ThemeSettings from "./ThemeSettings";

export default class ThemeSettingsWrapper extends Component {
  render() {
    return (
      <div>
        ThemeSettingsWrapper
        <ThemeSettings
          buttonRender={(changeTheme, color) => <span>!{color}!</span>}
        />
      </div>
    );
  }
}
