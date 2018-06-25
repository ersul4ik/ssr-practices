import rootReducer from '../../src/store/index';

const initialState = {
    todos: [],
}

describe('authenticate reducer', () => {
    it('returns the initial state', () => {

        expect(rootReducer(undefined, {})).toEqual(initialState);
    });

    it('select all tasks', () => {
        const tasks = [{task_id: 23, description: "i don`t now"}, {task_id: 24, description: "is`n true"}];
        expect(rootReducer(initialState, { type: "SELECT_ALL_TODO", payload: tasks })).toEqual({
            ...initialState,
            todos: [...initialState.todos, {task_id: 23, description: "i don`t now"}, {task_id: 24, description: "is`n true"}]
        });
    });

    it('pass data to ADD', () => {
        expect(rootReducer(initialState, { type: "ADD_TODO", payload: "testing" })).toEqual({
            ...initialState,
            todos: [...initialState.todos, "testing"]
        });
    });

    it('delete selected task', () => {
        const initialState = {
            todos: [{task_id: 1, description: "first"}]
    }
        expect(rootReducer(initialState, { type: "DELETE_TODO", payload: 1 })).toEqual({
            ...initialState,
            todos: []
        });
    });

});