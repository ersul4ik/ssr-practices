import React from 'react'
import { shallow } from 'enzyme'

import Button from '.'

const props = {
  name: 'ADD',
}

it('renders button and cheking props', () => {
  const wrapper = shallow(<Button name={props.name} />)
  expect(wrapper.contains('ADD')).toBe(true)
})
