import React from 'react';
import { mount } from 'enzyme';

import TextField from '@material-ui/core/TextField';

import { InputForm } from '../InputForm';

jest.mock('../../../contexts', () => ({
    TodoConsumer: ({ children }) => children({
        addItem: jest.fn()
    })
}));

const mockChangeFn = jest.fn();
const rendered = mount(<InputForm input="" handleInputChange={mockChangeFn} />);

describe('InputForm', function () {
    it('should call handleInputChange on input change', function () {
        rendered.find('input').simulate('change', { target: { value: 'test' } });
        expect(mockChangeFn).toHaveBeenCalledWith('test');
    });
});