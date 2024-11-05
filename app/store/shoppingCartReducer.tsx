import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface ShoppingCartItem {
    quantidade: number
    tipo: string
    tamanho?: string
    tecido?: string
}

const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: [],
    reducers: {
        addToCart: (state, action: PayloadAction<ShoppingCartItem>) => {
            // @ts-ignore
            state.push(action.payload)
        },
        removeFromCart: (state, action: PayloadAction<ShoppingCartItem>) => {
            // @ts-ignore
            state.splice(state.indexOf(action.payload), 1)
        }
    }
})

export const {addToCart, removeFromCart} = shoppingCartSlice.actions

export default shoppingCartSlice.reducer
