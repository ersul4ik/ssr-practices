import React from 'react'
import expect from 'expect';
import { shallow } from 'enzyme'

import Button from '../../src/shared/components/atoms/Button/index'

describe('Test BUTTON PROPS', () => {
    it('handles clicks', () => {
        const onClickSpy = jest.fn();
        const renderedComponent = shallow(<Button onClick={onClickSpy} />);
        renderedComponent.find('button').simulate('click');
        expect(onClickSpy).toHaveBeenCalled();
    })
});