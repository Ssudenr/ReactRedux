import { createSlice } from "@reduxjs/toolkit";
const initialState={value:100}

const counterSlice=createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment(state){
            state.value++;
        },
        reset(state){
            return initialState
        },
        addMore(state, action)
        {
            console.log("addMore", state, action);
            state.value+=action.payload.item-action.payload.data
        }
    }
})

export const {increment,reset,addMore}=counterSlice.actions
export default counterSlice.reducer