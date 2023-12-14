import {createSlice} from '@reduxjs/toolkit'

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        clearCart:(state)=>{state.items=[]},
        removeItems:(state)=>{
            state.items.pop();
        }
    }
})

export const {addItem,clearCart,removeItems}=cartSlice.actions;
export default cartSlice.reducer;

