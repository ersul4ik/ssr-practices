import React, { Component } from 'react';

class Test extends Component {
  render() {
    return (
      <div>
          <form onSubmit={() => console.log('ok')}>
              <button type="submit">ddd</button>
              </form>
      </div>
    )
  }
}

export default Test