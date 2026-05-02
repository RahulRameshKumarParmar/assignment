import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    page: 'login',
    allproducts: [],
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setPage } = dataSlice.actions

export default dataSlice.reducer