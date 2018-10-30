import React from 'react';
import { mount } from 'enzyme';

import Button from '@material-ui/core/Button'

import { Filters } from '../Filters';

jest.mock('../../../contexts', () => ({
    TodoConsumer: ({ children }) => children({
        items: [],
        filter: 'OPEN',
        changeFilter: jest.fn()
    })
}));

describe('Filters', function () {
    const rendered = mount(<Filters />);
    it('should render 3 buttons', function () {
        expect(rendered.find(Button).length).toEqual(3);
    });
    it('should render mark the open button as disabled since it is selected', function () {
        expect(rendered.find(Button).first().prop('disabled')).toEqual(true);
    });
});