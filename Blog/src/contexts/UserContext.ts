import { createContext } from 'react'
import type { UserContextType } from '../types'

const defaultValue: UserContextType = {
  user: 'Guest',
  setUser: () => {}
}

export const UserContext = createContext(defaultValue)