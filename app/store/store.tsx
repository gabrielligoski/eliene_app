import {configureStore} from "@reduxjs/toolkit";
import shoppingCartReducer from "@/app/store/shoppingCartReducer";

export const store = configureStore({
    reducer: {
        shoppingCart: shoppingCartReducer
    }
})

export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
