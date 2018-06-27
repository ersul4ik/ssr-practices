import { connect } from 'react-redux';
import { addTask } from '../actions/index';
import AddTodo from '../components/organisms/AddTodo/index'

export const mapDispatchToProps = (dispatch) => ({
  addTask: (description) => dispatch(addTask({ description })),
})

export default connect(null, mapDispatchToProps)(AddTodo)