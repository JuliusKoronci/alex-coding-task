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

export const TodoList = () => (
    <List>
        <TodoConsumer>
            {({ items, toggleStatus, toggleDelete }) => items.map(item =>
                <ListItem button key={item.id}>
                    <ListItemIcon onClick={() => toggleStatus(item.id)}>
                        {item.status === TODO_LIST.FILTERS.CLOSED ?
                            <CheckBox /> :
                            <CheckBoxOutlineBlank />}
                    </ListItemIcon>
                    <ListItemText
                        style={item.deleted ? { textDecoration: 'line-through' } : {}}
                        inset
                        primary={item.title}
                    />
                    <ListItemIcon onClick={() => toggleDelete(item.id)}>
                        {!item.deleted ? <Delete /> : <Restore />}
                    </ListItemIcon>
                </ListItem>)}
        </TodoConsumer>
    </List>
);