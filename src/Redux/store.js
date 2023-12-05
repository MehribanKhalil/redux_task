import { configureStore } from "@reduxjs/toolkit";
import { caculatorReducer } from "./Features/calculatorSlice";
import { todoReducer } from "./Features/todoSlice";

export const store = configureStore({
    reducer:{
        calculator:caculatorReducer,
        todoApp:todoReducer
    }
})