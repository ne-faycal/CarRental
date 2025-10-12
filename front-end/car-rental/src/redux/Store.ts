import {configureStore} from '@reduxjs/toolkit';
import carFormSlice from './slices/carFormSlice';



export const store = configureStore({
    reducer :{
        carForm: carFormSlice,
    }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;