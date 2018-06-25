import React, { Component } from 'react';
import AddTodos from './containers/AddTodos';
import Todos from './containers/Todos';

class App extends Component {
  render() {
    return (
      <div>
        <AddTodos />
        <Todos />
      </div>
    )
  }
}

export default App