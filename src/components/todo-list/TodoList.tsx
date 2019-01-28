import * as React from "react"
import styles from './TodoList.module.css'
import {GlobalState} from "../../data/types"
import {connect} from "react-redux"
import TodoItem from "../todo/TodoItem"
import {bindActionCreators, Dispatch} from "redux"
import {CreateTodoPayload, Todo} from "../../data/todos/types"
import {createTodo} from "../../data/todos/actions"
import {selectTodosArraySorted} from "../../data/todos/selectors"

type PropsFromState = {
  todos: Todo[]
  todoNextId: number
}

type DispatchProps = {
  createTodo: (payload: CreateTodoPayload) => void
}

class TodoList extends React.Component<PropsFromState & DispatchProps> {
  render() {
    const {todos} = this.props
    return (
      <ul className={styles.root}>
        {todos.map((todo: Todo) => (
          <TodoItem key={todo.id} todo={todo}/>
        ))}
        <button
          className={styles.createTodoButton}
          onClick={this.onCreateTodoButtonClick}
        >
          Create Todo +
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

function mapStateToProps(state: GlobalState): PropsFromState {
  return {
    todos: selectTodosArraySorted(state),
    todoNextId: state.todos.todoNextId,
  }
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return bindActionCreators({
    createTodo,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)