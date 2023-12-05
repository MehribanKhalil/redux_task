import { createSlice } from "@reduxjs/toolkit";

const initialState={
    todo:[]
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todo.push(action.payload)
        },
        editTodo:(state,action)=>{
            const index=state.todo.findIndex(x=>x.id===action.payload.id)
            state.todo[index]=action.payload
        },
        deleteTodo:(state,action)=>{
            state.todo = state.todo.filter(x => x.id !== action.payload)
        }
        
    }
})

export const { addTodo, editTodo, deleteTodo } = todoSlice.actions;
export const todoReducer=todoSlice.reducer