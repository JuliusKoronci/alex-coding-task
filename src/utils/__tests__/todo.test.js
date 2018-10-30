import { updateTodoList, createTodoItem } from '../todo';

describe('updateTodoList', function () {
    const list = [
        {
            id: '123',
            status: 'someStatus'
        },
        {
            id: '124',
            status: 'someStatus'
        },
        {
            id: '125',
            status: 'someStatus'
        },
    ];
    it('should update the list where id matches with changes', function () {
        expect(updateTodoList({
            items: list,
            id: '124',
            fieldValue: (item) => ({
                ...item,
                newField: 'test',
                status: 'newStatus'
            })

        })).toEqual([
            {
                id: '123',
                status: 'someStatus'
            },
            {
                id: '124',
                newField: 'test',
                status: 'newStatus'
            },
            {
                id: '125',
                status: 'someStatus'
            },
        ])
    });
    it('should return the same list if no matching id', function () {
        expect(updateTodoList({
            items: list,
            id: '1246',
            fieldValue: (item) => ({
                ...item,
                newField: 'test',
                status: 'newStatus'
            })

        })).toEqual(list);
    });
});

describe('createTodoItem', function () {
    it('should return a new todo item with correct title', function () {
        const item = createTodoItem('my task');
        /**
         * @TODO Need to mock date constructor
         */
        delete item['time'];
        delete item['id'];
        expect(item).toEqual({ history: null, status: "OPEN", title: "my task" });
    });
});