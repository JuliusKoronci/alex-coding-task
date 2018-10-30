import { TODO_LIST } from '../constants';

export const createTodoItem = title => ({
    title,
    status: TODO_LIST.FILTERS.OPEN,
    /**
     * We are adding this flag to be able to keep the status before deletion
     */
    history: null,
    time: new Date(),
    /**
     * This would come from a db and milliseconds are only for demo purposes
     */
    id: (new Date()).getMilliseconds(),
});

/**
 * Update a field of a matching item with a new value
 *
 * @param {Array} list - list of items
 * @param {*} id - identifier
 * @param {Function} fieldValue - function which accepts an item and returns a new object to merge
 * @returns {Array} - updated list of same size
 */
export const updateTodoList = ({ items, id, fieldValue }) => items.map(
    item => {
        if (item.id === id) {
            return ({
                ...item,
                ...fieldValue(item)
            })
        }
        return item;
    }
);