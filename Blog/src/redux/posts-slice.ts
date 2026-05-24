import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import type { PostModel, PostsState } from '../types'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch('https://api.spaceflightnewsapi.net/v4/blogs/')
  const data = await response.json()
  return data.results
})

const initialState: PostsState = {
  data: [],
  loading: false,
  error: false
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state: PostsState) => {
      state.loading = true
    })
    builder.addCase(fetchPosts.fulfilled, (state: PostsState, action: PayloadAction<PostModel[]>) => {
      state.loading = false
      state.data = action.payload
    })
    builder.addCase(fetchPosts.rejected, (state: PostsState) => {
      state.error = true
      state.loading = false
    })
  }
})

export const postsReducer = postsSlice.reducer