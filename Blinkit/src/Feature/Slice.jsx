import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

// Fetch API data
export const fetchApi = createAsyncThunk("fetchApi", async () => {
    const response = await axios.get("http://localhost:5000/item")
    return response.data
})

export const addQuantity = createAsyncThunk("addQuantity", async (id) => {
    const { data } = await axios.get(`http://localhost:5000/item/${id}`)
    const response = await axios.put(`http://localhost:5000/item/${id}`, {
        ...data,
        quantity: data.quantity + 1
    })
    return response.data
});


// Decrement quantity
export const removeQuantity = createAsyncThunk("removeQuantity", async (id) => {
    const { data } = await axios.get(`http://localhost:5000/item/${id}`)
    const response = await axios.put(`http://localhost:5000/item/${id}`, {
        ...data,
        quantity: data.quantity - 1
    })
    return response.data
})

// Redux slice
export const Api = createSlice({
    name: "Api",
    initialState: { data: [], loading: true },
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchApi.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
            })
            .addCase(addQuantity.fulfilled, (state, action) => {
                const itemIndex = state.data.findIndex((e) => e.id === action.payload.id)
                state.data[itemIndex] = action.payload
            })
            .addCase(removeQuantity.fulfilled, (state, action) => {
                const itemIndex = state.data.findIndex((e) => e.id === action.payload.id)
                state.data[itemIndex] = action.payload
            })
    }
})

export default Api.reducer