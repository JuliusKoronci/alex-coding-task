import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CheckBox from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank';
import Delete from '@material-ui/icons/Delete';

import { TodoConsumer } from '../../contexts';
import { TODO_LIST } from '../../constants';

export const TodoList = () => (
    <List>
        <TodoConsumer>
            {({ items, toggleStatus, deleteItem }) => items.map(item =>
                <ListItem button key={item.id}>
                    <ListItemIcon onClick={() => toggleStatus(item.id)}>
                        {item.status === TODO_LIST.FILTERS.CLOSED ?
                            <CheckBox /> :
                            <CheckBoxOutlineBlank />}
                    </ListItemIcon>
                    <ListItemText inset primary={item.title} />
                    {!item.deleted && <ListItemIcon onClick={() => deleteItem(item.id)}>
                        <Delete />
                    </ListItemIcon>}
                </ListItem>)}
        </TodoConsumer>
    </List>
);