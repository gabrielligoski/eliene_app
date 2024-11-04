import {configureStore} from "@reduxjs/toolkit";
import shoppingCartReducer from "@/app/store/shoppingCartReducer";

export const store = configureStore({
    reducer: {
        shoppingCart: shoppingCartReducer
    }
})
