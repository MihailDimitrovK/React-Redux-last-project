import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCompanies = createAsyncThunk(
  "companies/getCompanies",
  async () => {
    return await fetch("https://api.jsonbin.io/b/6177e9399548541c29c8c0f5").then(
      (res) => res.json()
    );
  }
);

const companiesSlice = createSlice({
  name: "company",
  initialState: {
    companies: [],
    status: null,
    error: '',
  },
  extraReducers: {
    [getCompanies.pending]: (state) => {
      state.status = "loading";
    },
    [getCompanies.fulfilled]: (state, action) => {
      state.status = "success";
      state.companies = action.payload;
    },
    [getCompanies.rejected]: (state, action) => {
      state.status = "failed";
      state.error  = action
    },
  },
});

export default companiesSlice.reducer;