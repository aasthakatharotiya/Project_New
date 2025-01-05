import { configureStore } from "@reduxjs/toolkit"
import Api from "../Feature/Slice"

export const store = configureStore({
    reducer: {
        apiKey: Api
    }
})