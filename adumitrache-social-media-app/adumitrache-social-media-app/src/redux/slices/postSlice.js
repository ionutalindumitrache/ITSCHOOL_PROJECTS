import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postService from "../../services/postService";

const initialState = {
  status: "idle",
  id: 0,
  title: "",
  description: "",
};

export const getPosts = createAsyncThunk("post/get", async () => {
  const { data } = await postService();

  return data;
});

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getPosts.pending, (state, action) => {
        state.title = '';
        state.description = ''
    })
    .addCase(getPosts.fulfilled, (state, action) => {
        state.title = action.payload.title;
        state.description = action.payload.description;
    })
    .addCase(getPosts.rejected, (state, action) => {
        state.title = '';
        state.description = ''
    });
  },
});

export const postReducer = postSlice.reducer;
