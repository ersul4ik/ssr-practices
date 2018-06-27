import React, { Component } from 'react';
import AddTodo from './containers/AddTodo'
import Todos from './containers/Todos';

class App extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <Todos />
      </div>
    )
  }
}

export default App