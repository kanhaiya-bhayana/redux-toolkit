import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
    reducer:{
        counter: counterReducer,
    }
})



/*
    if you have more than one reducer then use can define like this...

        reducer:{
            counter: counterReducer,
            ..
            ...
            ....
        }
*/