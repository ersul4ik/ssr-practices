import { tasksFetchDataSuccess, tasksDeleteSuccess, tasksAddSuccess } from '../../src/shared/actions'

describe('actions', () => {
    it('should create an action to add a todo', () => {
        const text = 'Finish docs'
        const expectedAction = {
            type: 'ADD_TODO',
            payload: text
        }
        expect(tasksAddSuccess(text)).toEqual(expectedAction)
    })

    it('should create an action to delete a todo', () => {
        const id = 1
        const expectedAction = {
            type: 'DELETE_TODO',
            payload: id
        }
        expect(tasksDeleteSuccess(id)).toEqual(expectedAction)
    })

    it('should create an action to fetch a todo', () => {
        const todos = {id: 1, description: 'first'}
        const expectedAction = {
            type: 'SELECT_ALL_TODO',
            payload: todos
        }
        expect(tasksFetchDataSuccess(todos)).toEqual(expectedAction)
    })
})