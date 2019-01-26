import * as React from "react"
import styles from './TodoItem.module.css'
import {State} from "../../types"
import {connect} from "react-redux"
import {Todo, UpdateTodoPayload} from "../../todos/types"
import cn from 'classnames'
import {bindActionCreators, Dispatch} from "redux"
import {updateTodo} from "../../todos/actions"

type OwnProps = {
  todoId: number
}

type PropsFromState = {
  todo: Todo
}

type DispatchProps = {
  updateTodo: (payload: UpdateTodoPayload) => void
}

class TodoItem extends React.Component<OwnProps & PropsFromState & DispatchProps> {
  render() {
    const {todo: {isDone, title}} = this.props
    return (
      <li className={styles.root}>
        <label className={styles.title}>{title}</label>
        <button
          onClick={this.onToggleIsDoneButtonClick}
          className={
            cn(
              styles.button,
              {[styles.buttonIsDone]: isDone},
            )
          }
        />
      </li>
    )
  }

  onToggleIsDoneButtonClick = () => {
    const {id, isDone} = this.props.todo
    this.props.updateTodo({
      id,
      dateModified: new Date(),
      isDone: !isDone,
    })
  }
}

function mapStateToProps(state: State, props: OwnProps): PropsFromState {
  return {
    todo: state.todos.byId[props.todoId],
  }
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return bindActionCreators({
    updateTodo,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)