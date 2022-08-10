import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const getBook = createAsyncThunk('Book/getBook', 
    async (_,thunkAPI) => {
        try {
            const res = await fetch('https://api.jsonbin.io/v3/b/62f3c650e13e6063dc7468aa')
            const Data = await res.json();
            return Data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    })

const initialState = {Book: [] , isLoading: false , isError: null}
const booksSlice = createSlice({
    name: 'Book',
    initialState: initialState,
    extraReducers: {
        [getBook.pending]: (state,action) => {
            state.isLoading = true
            state.isError = null
        },
        [getBook.fulfilled]: (state,action) => {
            state.isLoading = false
            state.Book = action.payload.record.Book
        },
        [getBook.rejected]: (state,action) => {
            state.isLoading = false
            state.isError = action.payload
        }
    }
})
export default booksSlice.reducer;