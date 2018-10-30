import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CheckBox from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank';
import Delete from '@material-ui/icons/Delete';
import Restore from '@material-ui/icons/Restore';

import { TodoConsumer } from '../../contexts';
import { TODO_LIST } from '../../constants';
import { selectTodosByStatus } from '../../selectors';

export const TodoList = () => (
    <List>
        <TodoConsumer>
            {({ items, toggleStatus, toggleDelete, filter }) => selectTodosByStatus(items, filter)
                .map(item =>
                    <ListItem button key={item.id}>
                        <ListItemIcon onClick={() => toggleStatus(item.id)}>
                            {item.status === TODO_LIST.FILTERS.CLOSED ?
                                <CheckBox /> :
                                <CheckBoxOutlineBlank />}
                        </ListItemIcon>
                        <ListItemText
                            style={
                                item.status === TODO_LIST.FILTERS.DELETED ?
                                    { textDecoration: 'line-through' } :
                                    {}
                            }
                            inset
                            primary={item.title}
                        />
                        <ListItemIcon onClick={() => toggleDelete(item.id)}>
                            {item.status === TODO_LIST.FILTERS.DELETED ? <Restore /> : <Delete />}
                        </ListItemIcon>
                    </ListItem>)}
        </TodoConsumer>
    </List>
);