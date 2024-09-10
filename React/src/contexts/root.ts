import {configureStore} from "@reduxjs/toolkit";
import {authenticateReducer} from "contexts/Authenticate";
import {cartReducer} from "contexts/Cart";
import {orderReducer} from "contexts/Order";

export const store = configureStore(
    {
        reducer: {
            authenticate: authenticateReducer,
            cart: cartReducer,
            order: orderReducer
        }
    }
)

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch