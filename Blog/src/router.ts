import { createBrowserRouter } from 'react-router'
import { RouteObject } from 'react-router'
import { Layout } from './components/layout/Layout'
import { Main } from './pages/Main'
import { AllPosts } from './pages/AllPosts'
import { Post } from './pages/Post'
import { SearchResults } from './pages/SearchResults'

const routes: RouteObject[] = [
  {
    Component: Layout,
    children: [
      {
        path: '/',
        Component: Main,
      },
      {
        path: '/all-posts',
        Component: AllPosts
      },
      {
        path: '/posts/:postId',
        Component: Post,
      },
      {
        path: 'search-results/:searchQuery',
        Component: SearchResults,
      },
    ]
  },
]

export const router = createBrowserRouter(routes)