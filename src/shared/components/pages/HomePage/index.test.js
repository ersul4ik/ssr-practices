import React from 'react'
import { shallow } from 'enzyme'

import HomePage from '.'
import Todos from '../../../containers/Todos'


it('renders children when passed in', () => {
  const wrapper = shallow(<HomePage><Todos /></HomePage>)
  expect(wrapper.contains(<Todos />)).toBe(true)
})
