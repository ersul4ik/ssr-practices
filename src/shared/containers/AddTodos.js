import React from 'react'
import { connect } from 'react-redux'

import Button from '../components/atoms/Button'
import Label from '../components/atoms/Label'
import { addTask, testing } from '../actions'
import getAllCats from '../../store/api'

export const mapDispatchToProps = (dispatch) => {
  return {
    addTask: todo => dispatch(addTask(todo)),
  }
}

class ConnectedForm extends React.Component {
  constructor() {
    super()
    this.state = {
      description: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ description: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    const { description } = this.state
    if (!description.length) {
      return 403
    }
    else {
      this.props.addTask({ description })
    }
    this.setState({ description: '' })
  }

  render() {
    const { description } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <Label title="add task" />
          <input
            type="text"
            className="form-control"
            id="title"
            value={description}
            onChange={this.handleChange}
          />
        </div>
        <Button
          name="save"
          type="submit"
        />
      </form>
    )
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm)

export default Form
