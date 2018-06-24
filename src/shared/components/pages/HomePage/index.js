import React from 'react'
import { Provider } from 'react-redux'

import store from '../../../store'
import Todos from '../../../containers/Todos'
import AddTodos from '../../../containers/AddTodos'


const HomePage = () => (
  <Provider store={store}>
    <div>
      <AddTodos />
      <Todos />
    </div>
  </Provider>
)


export default HomePage
