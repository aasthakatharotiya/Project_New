import { configureStore } from "@reduxjs/toolkit"
import Money from "../Feature/ApiSlice"

export const store = configureStore({
    reducer: {
        moneyKey: Money
    }
})