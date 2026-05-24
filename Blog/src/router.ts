import { createBrowserRouter } from 'react-router'
import { RouteObject } from 'react-router'
import { Layout } from './components/layout/Layout'
import { Main } from './pages/Main'
import { Post } from './pages/Post'
import { SearchResults } from './pages/SearchResults'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'

const routes: RouteObject[] = [
  {
    Component: Layout,
    children: [
      {
        path: '/',
        Component: Main,
      },
      {
        path: '/all/:currentPage',
        Component: Main,
      },
      {
        path: '/posts/:postId',
        Component: Post,
      },
      {
        path: '/search-results/:searchQuery',
        Component: SearchResults,
      },
      {
        path: '/sign-in',
        Component: SignIn
      },
      {
        path: '/sign-up',
        Component: SignUp
      }
    ]
  },
]

export const router = createBrowserRouter(routes)