import * as React from "react"
import styles from './TodoList.module.css'
import {State} from "../../types"
import {connect} from "react-redux"
import TodoItem from "../todo/TodoItem"
import {bindActionCreators, Dispatch} from "redux"
import {CreateTodoPayload} from "../../todos/types"
import {createTodo} from "../../todos/actions"

type PropsFromState = {
  todosIds: number[]
  todoNextId: number
}

type DispatchProps = {
  createTodo: (payload: CreateTodoPayload) => void
}

class TodoList extends React.Component<PropsFromState & DispatchProps> {
  render() {
    const {todosIds} = this.props
    return (
      <ul className={styles.root}>
        {todosIds.map((id: number) => (
          <TodoItem key={id} todoId={id}/>
        ))}
        <button
          className={styles.createTodoButton}
          onClick={this.onCreateTodoButtonClick}
        >
          +
        </button>
      </ul>
    )
  }

  onCreateTodoButtonClick = () => {
    this.props.createTodo({
      id: this.props.todoNextId,
      title: '',
      dateCreated: new Date(),
    })
  }
}

function mapStateToProps(state: State): PropsFromState {
  return {
    todosIds: state.todos.ids,
    todoNextId: state.todos.todoNextId,
  }
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return bindActionCreators({
    createTodo,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)