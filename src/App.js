import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import ThemeContext from "./context";
import ThemeSettings from "./ThemeSettings";
import ThemeSettingsWrapper from "./ThemeSettingsWrapper";
import BuggyButton from "./BuggyButton";
import { fetchTodos, fetchFirst3Pages } from "./reducers/todos/actions";
import HookComponent from './HookComponent';

class App extends Component {
  state = {
    theme: "red"
  };

  componentWillMount() {
    this.source = this.props.fetchTodos();
    setTimeout(() => {
      this.source.cancel("Bob rule this req");
    }, 1);
  }

  changeTheme = theme => {
    this.setState({ theme });
  };

  render() {
    console.log(this.props);
    const { todos, fetchFirst3Pages } = this.props;
    const { theme, error } = this.state;

    if (!todos) {
      return null;
    }

    if (error) {
      return <h1>{error}</h1>;
    }

    return (
      <ThemeContext.Provider value={{ theme, changeTheme: this.changeTheme }}>
        <div>
          <h3>Todo List</h3>
          <button onClick={fetchFirst3Pages}>Fetch next 3 pages</button>
          <ul>
            {todos.map(todo => (
              <li>{todo.title}</li>
            ))}
          </ul>
          <BuggyButton />
          <ThemeSettings
            buttonRender={(changeTheme, color) => (
              <button onClick={() => changeTheme(color)}>
                Fancy button {color}
              </button>
            )}
          />
          <ThemeSettingsWrapper />
          <HookComponent text='11111aaaa'/>
        </div>
      </ThemeContext.Provider>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = {
  fetchTodos,
  fetchFirst3Pages
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
