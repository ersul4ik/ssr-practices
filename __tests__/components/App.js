import React from 'react'
import { shallow } from 'enzyme'
import App from '../../src/shared/App'
import AddTodos from '../../src/shared/containers/AddTodos';
import Todos from '../../src/shared/containers/Todos';

const wrap = (props = {}) => shallow(<App {...props} />)

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' })
  expect(wrapper.contains(<AddTodos />)).toBe(true)
})

it('renders props when passed in', () => {
  const wrapper = wrap(<App />)
  expect(wrapper.find(Todos)).toHaveLength(1)
})