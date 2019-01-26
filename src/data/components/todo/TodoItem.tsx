import * as React from "react"
import styles from './TodoItem.module.css'
import {State} from "../../types"
import {connect} from "react-redux"
import {Todo} from "../../todos/types"
import cn from 'classnames'

type OwnProps = {
  todoId: number
}

type PropsFromState = {
  todo: Todo
}

class TodoItem extends React.Component<OwnProps & PropsFromState> {
  render() {
    const {todo: {isDone, title}} = this.props
    return (
      <li className={styles.root}>
        <label className={styles.title}>{title}</label>
        <button
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
}

function mapStateToProps(state: State, props: OwnProps): PropsFromState {
  return {
    todo: state.todos.byId[props.todoId],
  }
}

export default connect(mapStateToProps)(TodoItem)