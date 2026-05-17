import { ReactNode } from 'react'

export type UserType = string

export type UserContextType = {
  user: UserType
  setUser: (user: UserType) => void
}

export type PostModel = {
  id: number
  image: string
  text: string
  date: string
  lesson_num: number
  title: string
  description: string
  author: number
  children?: ReactNode
}

export type PostProps = PostModel

export type PostsState = {
  data: PostModel[]
  loading: boolean
  error: boolean
}