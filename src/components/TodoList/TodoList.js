import React from 'react';
import List from '@material-ui/core/List';
import { TodoListItem } from '../TodoListItem';

import { TodoConsumer } from '../../contexts';
import { selectTodosByStatus } from '../../selectors';

/**
 * Render a list of todo items
 */
export const TodoList = () => (
    <List>
        <TodoConsumer>
            {({ items, filter }) => selectTodosByStatus(items, filter)
                .map(item => <TodoListItem key={item.id} item={item} />)}
        </TodoConsumer>
    </List>
);