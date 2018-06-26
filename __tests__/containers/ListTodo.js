import React from 'react';
import { shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import expect from 'expect';
import { Provider } from 'react-redux';

import ListTodos, {mapDispatchToProps} from '../../src/shared/components/organisms/ListTodos';
import { deleteTodo } from '../../src/shared/actions/index'

const mockStore = configureMockStore();

describe('Test ListTodos', () => {
    let wrapper, store;

    beforeEach(() => {
        const initialState = {
            todos: 1
        };
        store = mockStore(initialState);
        wrapper = shallow(
            <Provider store={store}>
                <ListTodos todos={store} />
            </Provider>
        );
    });

    it('should show previously rolled value', () => {
        expect(wrapper.props().todos.getState()).toEqual({ todos: 1 })
    });

})