import { configureStore } from "@reduxjs/toolkit";
import companiesReducer from "./slices/companiesSlice";
import currentCompanyReducer from "./slices/currentCompanySlice";
import setErrorReducer from '../store/slices/errorSlice'

const store = configureStore({
  reducer: {
    companies: companiesReducer,
    company: currentCompanyReducer,
    isError: setErrorReducer,
  },
});

export default store;