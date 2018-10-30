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

        deleteItem = (id) => this.setState({
            items: this.state.items.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        deleted: true,
                    }
                }
                return item;
            })
        });

        toggleStatus = (id) => this.setState({
            items: this.state.items.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        status: item.status === TODO_LIST.FILTERS.CLOSED ?
                            TODO_LIST.FILTERS.OPEN :
                            TODO_LIST.FILTERS.CLOSED,
                    }
                }
                return item;
            })
        });

        render() {
            return (
                <TodoProvider
                    value={{
                        ...this.state,
                        addItem: this.addItem,
                        deleteItem: this.deleteItem,
                        toggleStatus: this.toggleStatus,
                    }}
                >
                    <WrappedComponent {...this.props} />
                </TodoProvider>
            )
        }
    }
};