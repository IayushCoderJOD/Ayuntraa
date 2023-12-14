import {createSlice} from '@reduxjs/toolkit'

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
        toggle:false
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        clearCart:(state)=>{state.items=[]},
        removeItems:(state)=>{
            state.items.pop();
        },
        toggleTheme:(state)=>{
            state.toggle=!state.toggle
        }
    }
})

export const {addItem,clearCart,removeItems,toggleTheme}=cartSlice.actions;
export default cartSlice.reducer;

