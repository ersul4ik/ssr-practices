import React from 'react'
import { connect } from 'react-redux'

import { Button } from 'components'
import { deleteTodo, fetchTodos } from '../../../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: id => dispatch(deleteTodo(id)),
    fetchTodos: () => dispatch(fetchTodos()),
  }
}


class ListTodos extends React.Component {
  componentWillMount() {
    this.props.fetchTodos()
  }

  render() {
    const todos = this.props.todos
    return (
      <div>
        <ul className="list-group">
          {todos.map(todo =>
            (<li key={todo.task_id} className="list-group-item">
              {todo.description}
              <button
                type="button"
                className="close right"
                aria-label="Close"
                onClick={() => this.props.deleteTodo(todo.task_id)}
                style={{ marginLeft: '5px' }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </li>))}
        </ul>
      </div>

    )
  }
}

export default connect(null, mapDispatchToProps)(ListTodos)
