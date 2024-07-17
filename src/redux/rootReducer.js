// Root reducer combining all reducers
import { combineReducers } from '@reduxjs/toolkit'
import todoSlice from '../features/TodoSlice'

const rootReducer = combineReducers({
    todo:todoSlice
})

export default rootReducer;
