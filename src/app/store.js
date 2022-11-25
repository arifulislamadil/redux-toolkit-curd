import { configureStore } from "@reduxjs/toolkit";
import booksReducer  from "../fetaures/books/BookSlice";

const store = configureStore({
    reducer:{
        book: booksReducer
    }
})

export default store;