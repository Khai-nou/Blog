import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import type { PostModel, PostsState, FetchPostsParams } from '../types'
import { requestPosts } from '../services/posts'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async ({ limit, offset}: FetchPostsParams, { rejectWithValue, dispatch }) => {
  try {
    const posts = await requestPosts(limit, offset)
    const totalPages = Math.ceil(posts.count / limit)
    dispatch(setTotalPages(totalPages))
    return posts.results
  } catch (error) {
    console.error(error)
    return rejectWithValue(error as Error)
  }
})

const initialState: PostsState = {
  data: [],
  totalPages: 0,
  loading: false,
  error: false
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setTotalPages: (state: PostsState, action: PayloadAction<number>) => {
      state.totalPages = action.payload
    }
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

export const { setTotalPages } = postsSlice.actions
export const postsReducer = postsSlice.reducer