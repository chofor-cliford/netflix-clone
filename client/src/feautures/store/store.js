import { configureStore } from '@reduxjs/toolkit';
import { netflixSlice } from '../slices';

export const store = configureStore({
    reducer: {
        netflix: netflixSlice,
    }
})