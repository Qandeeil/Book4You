import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const getEvents = createAsyncThunk('Event/getEvents', 
    async (_,thunkAPI) => {
        try {
            const res = await fetch('https://api.jsonbin.io/v3/b/62f3c485a1610e6386f785e4')
            const Data = await res.json();
            return Data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    })

const initialState = {Events: [] , isLoading: false , isError: null}
const eventsSlice = createSlice({
    name: 'Event',
    initialState: initialState,
    extraReducers: {
        [getEvents.pending]: (state,action) => {
            state.isLoading = true
            state.isError = null
        },
        [getEvents.fulfilled]: (state,action) => {
            state.isLoading = false
            state.Events = action.payload.record.Event
        },
        [getEvents.rejected]: (state,action) => {
            state.isLoading = false
            state.isError = action.payload
        }
    }
})
export default eventsSlice.reducer