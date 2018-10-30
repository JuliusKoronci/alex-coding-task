import { TODO_LIST } from '../constants';

export const createTodoItem = title => ({
    title,
    status: TODO_LIST.FILTERS.OPEN,
    /**
     * We are adding this flag to be able to keep the status before deletion
     */
    deleted: false,
    time: new Date(),
    /**
     * This would come from a db and milliseconds are only for demo purposes
     */
    id: (new Date()).getMilliseconds(),
});