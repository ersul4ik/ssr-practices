import React from 'react';
import { shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import expect from 'expect';
import { Provider } from 'react-redux';

import AddTodo, { mapDispatchToProps } from '../../src/shared/containers/AddTodos';

import { addTask } from '../../src/shared/actions/index'

const mockStore = configureMockStore();

describe('Test AddTodo', () => {
    
    it('should handle the click event', () => {
        const output = shallow(
          <AddTodo />
        );
        mapDispatchToProps = jest.fn();
        console.log(mapDispatchToProps)
      });
})