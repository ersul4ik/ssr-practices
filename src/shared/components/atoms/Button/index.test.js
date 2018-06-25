import React from 'react'
import expect from 'expect';
import { shallow, mount, render } from 'enzyme'

import Button from './index'
import Foo from './Foo'

describe('Test BUTTON PROPS', () => {
    it('handles clicks', () => {
        const onClickSpy = jest.fn();
        const renderedComponent = shallow(<Button onClick={onClickSpy} />);
        renderedComponent.find('button').simulate('click');
        expect(onClickSpy).toHaveBeenCalled();
    })
});