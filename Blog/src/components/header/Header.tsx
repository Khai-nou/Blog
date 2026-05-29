import { NavLink } from 'react-router'
import { UserPick } from '../userPick/UserPick'
import { useContext, useState } from 'react'
import type { UserContextType, HeaderProps } from '../../types'
import { UserContext } from '../../contexts/UserContext'
import styles from './Header.module.scss'
import { Link } from 'react-router'
import logo from '../../assets/logo.png'

export function Header(): React.ReactElement {
  const { user } = useContext<UserContextType>(UserContext)
  const [searchQuery, setSearchQuery] = useState('')

  function handleChangeInputSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.target.value)
  }

  function resolveActiveClass({ isActive }: HeaderProps) {
    return isActive ? `${styles.nav_link} ${styles.active}` : `${styles.nav_link}`
  }

  return (
    <header>
      <nav className={styles.navbar}>
        <NavLink to="/all/1" className={styles.logo}><img src={logo} /></NavLink>
        <ul className={styles.nav_list}>
          <li className={styles.nav_item}>
            <NavLink className={resolveActiveClass} to="/all/1">All Posts</NavLink> 
          </li>
          <li className={styles.nav_item}>
            <NavLink className={resolveActiveClass} to="/sign-in">Sign In</NavLink> 
          </li>
          <li className={styles.nav_item}>
            <NavLink className={resolveActiveClass} to="/sign-up">Sign Up</NavLink> 
          </li>
        </ul>
        <form className={styles.form} role="search">
          <input className={styles.input} type="search" placeholder="Search..." aria-label="Search" onChange={handleChangeInputSearch} />
          <Link to={`/search-results/${searchQuery}/1`}><button className={styles.button} type="submit" disabled={!searchQuery}>Search</button></Link>
        </form>
        <UserPick userName={user}></UserPick>
      </nav>
    </header>
  )
}