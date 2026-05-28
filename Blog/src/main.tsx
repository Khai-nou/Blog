import { createRoot } from 'react-dom/client'
import { App } from './App'

const rootElement: HTMLElement | null = document.querySelector('#root')

if (!rootElement) {
  throw new Error('Root element not found!')
}

createRoot(rootElement).render(<App />)