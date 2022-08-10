import { configureStore } from "@reduxjs/toolkit";
import eventsSlice from './Events/Events'
import booksSlice from './Books/Books'

const store = configureStore({reducer: {
    Event: eventsSlice,
    Books: booksSlice
}})
export default store