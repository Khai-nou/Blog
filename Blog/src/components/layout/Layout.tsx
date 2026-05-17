import { Header } from '../header/Header'
import { Main } from '../main/Main'
import { Footer } from '../footer/Footer'
import { Outlet } from 'react-router'
import styles from './Layout.module.scss'

export function Layout(): React.ReactElement {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </div>
    </div>
  )
}