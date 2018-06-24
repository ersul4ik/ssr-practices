import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <form onSubmit={() => console.log('APP')}>
        <input></input>
              <button type="submit">Why</button>
          </form>
      </div>
    )
  }
}

export default App