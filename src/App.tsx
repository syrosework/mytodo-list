import React, { Component } from 'react';
import styles from './App.module.css';
import TodoList from "./data/components/todo-list/TodoList"

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header className="App-header">
          My Todo App
        </header>
        <TodoList/>
      </div>
    );
  }
}

export default App;
