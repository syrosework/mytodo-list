import * as React from 'react'
import {connect} from "react-redux"
import {GlobalState} from "../../data/types"
import styles from './SortingSelect.module.css'
import {ChangeSortingAction, ChangeSortingPayload, Sorting, SortingState} from "../../data/sortings/types"
import {bindActionCreators, Dispatch} from "redux"
import {changeSorting} from "../../data/sortings/actions"
import cn from 'classnames'
import {MouseOrTouchEvent} from "react-select/lib/Select"
import {instanceOf} from "prop-types"

type PropsFromState = SortingState

type DispatchProps = {
  changeSorting: (newSorting: ChangeSortingPayload) => ChangeSortingAction
}

type State = {
  listOpened: boolean
}

class SortingSelect extends React.Component<PropsFromState & DispatchProps, State> {

  state: State = {
    listOpened: false,
  }

  private rootRef = React.createRef<HTMLDivElement>()


  componentDidMount(): void {
    window.addEventListener('click', this.clickOutsideOfSelectListener)
  }

  componentWillUnmount(): void {
    window.removeEventListener('click', this.clickOutsideOfSelectListener)
  }

  render() {
    const {currentSorting, sortings} = this.props
    const {listOpened} = this.state
    return (
      <div
        ref={this.rootRef}
        className={styles.root}
      >
        <button
          className={styles.value}
          onClick={this.toggleOptionsList}
        >
          Sort: {currentSorting.label}
        </button>
        {listOpened &&
        <ul
          className={
            cn(
              styles.optionsList,
            )
          }
        >
          {sortings.map((sorting: Sorting) => (
            <button
              className={styles.optionItem}
              key={sorting.value}
              onClick={this.onSortingChange(sorting)}
            >
              {sorting.label}
            </button>
          ))}
        </ul>
        }
      </div>
    )
  }

  toggleOptionsList = () => {
    this.setState({listOpened: !this.state.listOpened})
  }

  clickOutsideOfSelectListener = (e: MouseEvent) => {
    if (
      this.rootRef.current
      && e.target instanceof Element
      && !this.rootRef.current.contains(e.target)
    ) {
      this.closeOptionsList()
    }
  }

  closeOptionsList = () => {
    this.setState({listOpened: false})
  }

  onSortingChange = (newSorting: Sorting) => () => {
    this.props.changeSorting(newSorting)
    this.closeOptionsList()
  }
}

function mapStateToProps(state: GlobalState): PropsFromState {
  return state.sorting
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return bindActionCreators({
    changeSorting,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SortingSelect)
