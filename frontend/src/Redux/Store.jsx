import {configureStore} from '@reduxjs/toolkit';
import postReducer from './PostAmountSlice';

const store=configureStore({
    reducer:{
        post:postReducer,
    },
});

export default store;
