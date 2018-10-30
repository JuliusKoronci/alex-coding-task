import { memoize } from 'ramda';

/**
 * Filter out todos with matching status
 */
export const selectTodosByStatus = memoize(
    (list, status) => list.filter(item => item.status === status)
);