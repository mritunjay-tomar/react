const ADD_TODO = 'ADD_TODO'
export const addTodo = (message) => ({
    type: ADD_TODO,
    message,
    id: Math.random(),
})

const DELETE_TODO = 'DELETE_TODO'
export const DeleteTodo = (id) => ({
    type: DELETE_TODO,
    id,
})