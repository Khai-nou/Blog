import { ReactNode } from 'react'

export type UserType = string

export type UserContextType = {
  user: UserType
  setUser: (user: UserType) => void
}

export type PostModel = {
  id: number
  image_url: string
  summary: string
  published_at: string
  lesson_num: number
  title: string
  description: string
  author: number
  children?: ReactNode
}

export type PostProps = PostModel

export type PostsState = {
  data: PostModel[]
  totalPages: number
  loading: boolean
  error: boolean
}

export type FetchPostsParams = {
  limit: number
  offset: number
}

export type FetchPostsResponse = {
  results: PostModel[]
  count: number
}