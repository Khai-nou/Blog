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

export type BreadcrumbProps = {
  children: ReactNode
  postNumber?: number | string
}

export type FormFieldProps = {
  id: string
  label: string
  type: string
  value: string | undefined
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  ref?: React.RefObject<HTMLInputElement | null>
  valueChecked?: boolean
}

export type FormSignInProps = {
  email?: string
  password?: string
}

export type formSignUpProps = {
  name?: string
  email?: string
  password?: string
  passwordConfirm?: string
}

export type HeaderProps = {
  isActive: boolean
}

export type IslandProps = {
  children: ReactNode
}

export type MainProps = {
  children: ReactNode
}

export type PaginationProps = {
  isActive: boolean
}

export type TitleProps = {
  children: ReactNode
}

export type UserPickProps = {
  userName: UserContextType['user']
}