import React, { Component } from 'react';
import styles from './App.module.css';
import TodoList from "./components/todo-list/TodoList"
import SortingSelect from "./components/sorting-select/SortingSelect"

class App extends Component {
  render() {
    return (
      <div className={styles.root}>
        <header className={styles.header}>
          Todo App
          <SortingSelect/>
        </header>
        <TodoList/>
      </div>
    )
  }
}

export default App;
