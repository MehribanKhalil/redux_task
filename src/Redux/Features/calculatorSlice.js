import { createSlice } from "@reduxjs/toolkit";

const initialState={
    result:0
}
export const caculatorSlice=createSlice({
    name:'caculator',
    initialState,
    reducers:{
        addition:(state,action)=>{
            state.result=action.payload.num1+action.payload.num2
        },
        subtraction:(state,action)=>{
            state.result=action.payload.num1-action.payload.num2
        },
        multiplication:(state,action)=>{
            state.result=action.payload.num1*action.payload.num2
        },
        division:(state,action)=>{
            state.result=action.payload.num1/action.payload.num2
        }
    }
})

export const {addition,subtraction,multiplication,division}=caculatorSlice.actions
// export default caculatorSlice.reducer
export const caculatorReducer=caculatorSlice.reducer