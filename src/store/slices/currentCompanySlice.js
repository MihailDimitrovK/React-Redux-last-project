import { createSlice } from "@reduxjs/toolkit";

const currentCompanySlice = createSlice({
    name: "company",
    initialState: {
        company: 0
    },
    reducers: {
        setCompany: (state, action) => {
            state.company = action.payload;
        }
    }
});

export const { setCompany } = currentCompanySlice.actions;

export default currentCompanySlice.reducer;