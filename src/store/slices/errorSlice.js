import { createSlice } from "@reduxjs/toolkit";

const error = createSlice({
    name: "error",
    initialState: {
        isError: true
    },
    reducers: {
        setError: (state, action) => {
            state.isError = action.payload;
        }
    }
});

export const { setError } = error.actions;

export default error.reducer;