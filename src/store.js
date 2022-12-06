import {configureStore} from "@reduxjs/toolkit";
import stateReducer from "./stateSlice"; //importing the reducer property from our slice


export const store = configureStore({
    reducer:{
        stateValues: stateReducer, //<-- imported from our slice
    },
});