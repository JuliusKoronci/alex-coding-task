import React, { Component } from 'react';
import { TODO_LIST } from '../../constants';
import { TodoProvider } from '../../contexts'

const initialState = {
    items: [],
    filter: TODO_LIST.FILTERS.OPEN
};

export const withTodoList = (WrappedComponent) => {

    return class WithTodoList extends Component {
        state = initialState;

        render() {
            return (
                <TodoProvider value={this.state}>
                    <WrappedComponent {...this.props} />
                </TodoProvider>
            )
        }
    }
};