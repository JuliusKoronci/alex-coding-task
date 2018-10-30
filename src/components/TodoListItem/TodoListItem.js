import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CheckBox from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank';
import Delete from '@material-ui/icons/Delete';
import Restore from '@material-ui/icons/Restore';

import { TodoConsumer } from '../../contexts';
import { TODO_LIST } from '../../constants';
import { styles } from '../../styles';

/**
 * Single todo list item
 */
export const TodoListItem = ({ item }) => (
    <TodoConsumer>
        {({ toggleStatus, toggleDelete }) => <ListItem button key={item.id}>
            <ListItemIcon onClick={() => toggleStatus(item.id)}>
                {item.status === TODO_LIST.FILTERS.CLOSED ?
                    <CheckBox /> :
                    <CheckBoxOutlineBlank />}
            </ListItemIcon>
            <ListItemText
                style={
                    item.status === TODO_LIST.FILTERS.DELETED ?
                        styles.listItem.deleted :
                        {}
                }
                inset
                primary={item.title}
            />
            <ListItemIcon onClick={() => toggleDelete(item.id)}>
                {item.status === TODO_LIST.FILTERS.DELETED ? <Restore /> : <Delete />}
            </ListItemIcon>
        </ListItem>}
    </TodoConsumer>
);

TodoListItem.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        /**
         * One of the available item statuses from our constants
         */
        status: PropTypes.string.isRequired,
        history: PropTypes.string,
        /**
         * Date object
         */
        time: PropTypes.object.isRequired,
        /**
         * created at in milliseconds
         */
        id: PropTypes.number.isRequired,
    }).isRequired,
};