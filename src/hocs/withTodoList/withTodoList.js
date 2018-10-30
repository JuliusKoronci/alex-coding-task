import React, { Component } from 'react';

import { TODO_LIST } from '../../constants';
import { TodoProvider } from '../../contexts'
import { createTodoItem, updateTodoList } from '../../utils/todo';

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

        toggleDelete = (id) => this.setState({
            items: updateTodoList({
                id,
                items: this.state.items,
                fieldValue: (item) => {
                    if (item.status === TODO_LIST.FILTERS.DELETED) {
                        return { status: item.history };
                    }
                    return { status: TODO_LIST.FILTERS.DELETED, history: item.status };
                },
            }),
        });

        changeFilter = (filter) => this.setState({ filter });

        toggleStatus = (id) => this.setState({
            items: updateTodoList({
                id,
                items: this.state.items,
                fieldValue: (item) => ({
                    status: item.status === TODO_LIST.FILTERS.CLOSED ?
                        TODO_LIST.FILTERS.OPEN :
                        TODO_LIST.FILTERS.CLOSED
                }),
            }),
        });

        render() {
            return (
                <TodoProvider
                    value={{
                        ...this.state,
                        addItem: this.addItem,
                        toggleDelete: this.toggleDelete,
                        toggleStatus: this.toggleStatus,
                        changeFilter: this.changeFilter,
                    }}
                >
                    <WrappedComponent {...this.props} />
                </TodoProvider>
            )
        }
    }
};