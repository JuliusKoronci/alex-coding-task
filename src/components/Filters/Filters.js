import React from 'react';
import Button from '@material-ui/core/Button';
import CheckBox from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank';
import Delete from '@material-ui/icons/Delete';

import { TodoConsumer } from '../../contexts';
import { TODO_LIST } from '../../constants';
import { styles } from '../../styles';
import { selectTodosByStatus } from '../../selectors';

/**
 * Display a set of filters for todo list
 */
export const Filters = () => (
    <div style={styles.filters}>
        <TodoConsumer>
            {({ items, changeFilter, filter }) => <React.Fragment>
                <Button
                    color="primary"
                    disabled={filter === TODO_LIST.FILTERS.OPEN}
                    onClick={() => changeFilter(TODO_LIST.FILTERS.OPEN)}
                >
                    <CheckBoxOutlineBlank /> Open ({selectTodosByStatus(items, TODO_LIST.FILTERS.OPEN).length})
                </Button>
                <Button
                    onClick={() => changeFilter(TODO_LIST.FILTERS.CLOSED)}
                    disabled={filter === TODO_LIST.FILTERS.CLOSED}
                >
                    <CheckBox /> Closed ({selectTodosByStatus(items, TODO_LIST.FILTERS.CLOSED).length})
                </Button>
                <Button
                    color="secondary"
                    disabled={filter === TODO_LIST.FILTERS.DELETED}
                    onClick={() => changeFilter(TODO_LIST.FILTERS.DELETED)}
                >
                    <Delete /> Deleted ({selectTodosByStatus(items, TODO_LIST.FILTERS.DELETED).length})
                </Button>
            </React.Fragment>}
        </TodoConsumer>
    </div>
);