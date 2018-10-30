import React, { Component } from 'react';

import { TODO_LIST } from '../../constants';
import { TodoProvider } from '../../contexts'
import { createTodoItem } from '../../utils/todo';

const initialState = {
    items: [],
    filter: TODO_LIST.FILTERS.OPEN
};

export const withTodoList = (WrappedComponent) => {

    return class WithTodoList extends Component {
        state = initialState;
        addItem = (title) => this.setState({
            items: [...this.state.items, createTodoItem(title)]
        });

        render() {
            return (
                <TodoProvider
                    value={{
                        ...this.state,
                        addItem: this.addItem
                    }}
                >
                    <WrappedComponent {...this.props} />
                </TodoProvider>
            )
        }
    }
};