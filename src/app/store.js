import { configureStore } from "@reduxjs/toolkit";
import { studentReducer } from "../features/students/studentSlice";

const store = configureStore({
  reducer: {
    student: studentReducer,
  },
});
export default store;
