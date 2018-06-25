import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import ListTodos from '../../src/shared/components/organisms/ListTodos';

const mockStore = configureMockStore();
const store = mockStore({});

test('Check components, description tasks', () => {
    const todos = [{id:1, description: 'first task'}, {id:2, description: 'second task'}]
    const component = shallow(<Provider store={store}><ListTodos todos={todos} /></Provider>)
    expect(component.contains('first task')).toBe(true)
    
})


