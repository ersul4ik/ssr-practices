import axios from 'axios'

export const LOADING = 'LOADING'

export const ADD_TODO = 'ADD_TODO'

export const DELETE_TODO = 'DELETE_TODO'

export const SELECT_ALL_TODO = 'SELECT_ALL_TODO'


export function tasksFetchDataSuccess(items) {
  return {
    type: SELECT_ALL_TODO,
    payload: items
  }
}

export function tasksDeleteSuccess(id) {
  return {
    type: DELETE_TODO,
    payload: id
  }
}

export function fetchTodos() {
  return dispatch =>
    axios.get('http://127.0.0.1:4000/')
      .then((response) => {
        dispatch(tasksFetchDataSuccess(response.data.data))
      })
}

export function deleteTodo(task_id) {
  return dispatch =>
    axios({
      method: 'delete',
      url: 'http://127.0.0.1:4000/pop',
      params: { id: task_id },
    }).then(dispatch(tasksDeleteSuccess(task_id)))
}

export function addTask(text) {
  return (dispatch) => {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:4000/todos',
      params: text,
    }).then(() => {
      dispatch({ type: ADD_TODO, payload: text })
    })
  }
}