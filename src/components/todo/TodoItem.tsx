import * as React from "react"
import styles from './TodoItem.module.css'
import {State} from "../../data/types"
import {connect} from "react-redux"
import {RemoveTodoPayload, Todo, UpdateTodoPayload} from "../../data/todos/types"
import cn from 'classnames'
import {bindActionCreators, Dispatch} from "redux"
import {removeTodo, updateTodo} from "../../data/todos/actions"
import TextareaAutosize from 'react-autosize-textarea'

type OwnProps = {
  todoId: number
}

type PropsFromState = {
  todo: Todo
}

type DispatchProps = {
  updateTodo: (payload: UpdateTodoPayload) => void
  removeTodo: (payload: RemoveTodoPayload) => void
}

class TodoItem extends React.Component<OwnProps & PropsFromState & DispatchProps> {
  render() {
    const {todo: {isDone, title}} = this.props
    return (
      <li className={styles.root}>
        <TextareaAutosize
          className={styles.title}
          value={title}
          onInput={this.onTitleChange}
        />
        <div className={styles.buttonGroup}>
          <button
            onClick={this.onToggleIsDoneButtonClick}
            className={
              cn(
                styles.button,
                styles.buttonCheck,
                {[styles.buttonIsDone]: isDone},
              )
            }
          />
          <button
            onClick={this.onDeleteButtonClick}
            className={
              cn(
                styles.button,
                styles.buttonDelete,
              )
            }
          />
        </div>
      </li>
    )
  }

  onTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.props.updateTodo({
      id: this.props.todo.id,
      dateModified: new Date(),
      title: e.target.value,
    })
  }

  onToggleIsDoneButtonClick = () => {
    const {id, isDone} = this.props.todo
    this.props.updateTodo({
      id,
      dateModified: new Date(),
      isDone: !isDone,
    })
  }

  onDeleteButtonClick = () => {
    const {id} = this.props.todo
    this.props.removeTodo({id})
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
    removeTodo,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)