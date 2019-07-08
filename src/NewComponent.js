import React, { Component } from "react";

export default class NewComponent extends Component {
  constructor(props) {
    super(props);

    if (props.callback) {
      props.callback();
    }

    this.state = {
      clicked: 0
    };
  }

  handleEvent(event) {
    this.setState(prevState => ({ clicked: prevState.clicked + 1 }));
  }

  render() {
    return (
      <>
        <h1>New Component</h1>
        <button onClick={e => this.handleEvent(e)}>{this.state.clicked}</button>
      </>
    );
  }
}
