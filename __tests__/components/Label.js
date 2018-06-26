import React from 'react'
import expect from 'expect';
import { shallow } from 'enzyme'

import Label from '../../src/shared/components/atoms/Label/index'

describe('Test BUTTON PROPS', () => {
    it('handles clicks', () => {
        const renderedComponent = shallow(<Label title='just fun' />);
        expect(renderedComponent.text()).toBe('just fun');
    })
});