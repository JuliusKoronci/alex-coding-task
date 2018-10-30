import React from 'react';
import { mount } from 'enzyme';
import HomePage from '../HomePage';
import { Filters, TodoList, InputForm } from '../../../components';

/**
 * Mount is not preferred here because of performance but since
 * this is a small app it is sufficient
 */
describe('HomePage', function () {
    const rendered = mount(<HomePage />);
    it('should render 1 Filters component', function () {
        expect(rendered.find(Filters).length).toEqual(1);
    });
    it('should render 1 TodoList component', function () {
        expect(rendered.find(TodoList).length).toEqual(1);
    });
    it('should render 1 InputForm component', function () {
        expect(rendered.find(InputForm).length).toEqual(1);
    });
});