// Redux Toolkit slice for Todo state management

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todolist: [],
    cuurentTodo: {
        ui: 1,
        name: '',
        gender: '',
        email: '',
        code: '+91',
        phoneNumber: '',
    },
    count: 1,
    iseditng: false,
    currentItemId: null
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.todolist = [...state.todolist, action.payload]
            state.cuurentTodo = { ...initialState.cuurentTodo }
            state.count += 1
            state.cuurentTodo.ui = state.count

        },
        formInputUpdate: (state, action) => {
            state.cuurentTodo = action.payload
        },
        getItem: (state, action) => {
            let id = action.payload
            state.todolist.map(item => {
                if (item.ui === id) {
                    state.cuurentTodo = { ...item }
                    state.currentItemId = id
                    console.log(state.currentItemId)
                }
                state.iseditng = true
            })
        },
        removeItem: (state, action) => {
            state.todolist = state.todolist.filter(item => item.ui !== action.payload)
        },
        updateItem: (state, action) => {
            const ui = state.currentItemId;
            
            state.todolist=state.todolist.map(item => {
                if (item.ui === ui) {
                    item = action.payload
                }
                return item
            })
            state.cuurentTodo = { ...initialState.cuurentTodo }
            state.cuurentTodo.ui=state.count 
            state.isEditing = false;
            state.currentItemId = null;
        },
        clearCurrentTodo: (state) => {
            state.cuurentTodo = initialState.count;
          },

    }
})

export const { addItem, formInputUpdate, getItem, updateItem, removeItem, clearCurrentTodo } = todoSlice.actions;
export default todoSlice.reducer;