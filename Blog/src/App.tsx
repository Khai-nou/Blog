import { useState, useEffect } from 'react'
import type { UserContextType } from './types'
import { UserContext } from './contexts/UserContext'
import { RouterProvider } from 'react-router/dom'
import { router } from './router'
import { Provider } from 'react-redux'
import { store } from './redux/store'

export function App() {
  const [user, setUser] = useState<UserContextType['user']>('')

  useEffect(() => {
    setUser('Laurence Gregory Watkins')
  }, [])

  return (
    <Provider store={store}>
      <UserContext value={{ user, setUser }}>
        <RouterProvider router={router} />
      </UserContext>
    </Provider>
  )
}