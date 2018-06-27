import React from 'react';
import { shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import expect from 'expect';
import { Provider } from 'react-redux';

import ListTodos, { mapDispatchToProps } from '../../src/shared/components/organisms/ListTodos';

const mockStore = configureMockStore();

describe('Test ListTodos', () => {
    let wrapper, store;

    beforeEach(() => {
        const initialState = {
            todos: { id: 1, description: 'first' }
        };
        store = mockStore(initialState);
        wrapper = shallow(
            <Provider store={store}>
                <ListTodos todos={store} />
            </Provider>
        );
    });

    it('test list props', () => {
        expect(wrapper.props().todos.getState()).toEqual({ todos: { id: 1, description: 'first' } })
    });

})