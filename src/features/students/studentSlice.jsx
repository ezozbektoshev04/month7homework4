import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  students: [],
  error: "",
};

const fetchStudents = createAsyncThunk("students/fetchStudents", () => {
  return axios
    .get("https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/students")
    .then((res) => {
      //   console.log(res);
      return res.data;
    })
    .catch((err) => {
      return err;
    });
});

const studentSlice = createSlice({
  name: "students",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchStudents.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchStudents.fulfilled, (state, action) => {
      state.loading = false;
      state.students = action.payload;
      state.error = "";
    });
    builder.addCase(fetchStudents.rejected, (state, action) => {
      loading = false;
      state.students = [];
      state.error = action.error;
    });
  },
});

const studentReducer = studentSlice.reducer;
export { fetchStudents, studentReducer };
