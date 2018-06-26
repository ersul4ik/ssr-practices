import React from 'react'
import { connect } from 'react-redux'
import ListTodos from "../components/organisms/ListTodos";

export const mapStateToProps = (state) => {
  return { todos: state.todos }
}

const Todos = ({ todos }) => (
  <ListTodos todos={todos} />
)

const List = connect(mapStateToProps, null)(ListTodos)

export default List
