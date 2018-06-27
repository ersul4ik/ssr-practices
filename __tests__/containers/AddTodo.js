import AddTodo    from '../../src/shared/components/organisms/AddTodo';
import React      from 'react';
import {mount}    from 'enzyme';
import expect from 'expect';

describe('Add todo tests', () => {
  it('Button submit test', () => {
    const props = {
      addTodoRequest: jest.fn()
    }
    const text = 'test'
    const wrapper = mount(<AddTodo onAddTodo = {props.addTodoRequest}/>)
    wrapper.find('form').simulate('submit', { input: { value: text }})
    // wrapper.find('input').node.value = 'test add'
    // wrapper.find('form').simulate('submit');
    expect(props.addTodoRequest.mock.calls.length).toEqual(1)
  });
})