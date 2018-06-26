import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import ListTodos from '../../src/shared/containers/Todos';

const mockStore = configureMockStore();

describe('Link', () => {
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
    it('should render correctly', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});