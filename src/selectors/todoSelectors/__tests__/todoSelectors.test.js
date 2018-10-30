import { selectTodosByStatus } from '../todoSelectors';

describe('selectTodosByStatus', function () {
    it('should return an empty array if status does not match', function () {
        const list = [
            {
                status: 'open',
            },
            {
                status: 'closed',
            },
            {
                status: 'deleted',
            },
        ];
        expect(selectTodosByStatus(list, 'isnotmatching')).toEqual([])
    });
    it('should return an filtered array where status matches', function () {
        const list = [
            {
                status: 'open',
            },
            {
                status: 'open',
            },
            {
                status: 'deleted',
            },
        ];
        expect(selectTodosByStatus(list, 'open')).toEqual([
            {
                status: 'open',
            },
            {
                status: 'open',
            }
        ])
    });
});