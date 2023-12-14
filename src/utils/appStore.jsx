import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../utils/userSlice'
import cartSlice from './cartSlice';
const appStore=configureStore(
    {
        reducer:{
            user:userReducer,
            cart:cartSlice,
        }
    }
)

export default appStore;