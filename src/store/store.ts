import {configureStore} from "@reduxjs/toolkit";
import {carsReducer} from "./slices";

const store = configureStore({
    reducer:{
        cars:carsReducer
    }
})

export {store}