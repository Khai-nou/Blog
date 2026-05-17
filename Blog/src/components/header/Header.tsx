import { NavLink } from 'react-router'
import { UserPick } from '../userPick/UserPick'
import { useContext, useState } from 'react'
import type { UserContextType } from '../../types'
import { UserContext } from '../../contexts/UserContext'
import styles from './Header.module.scss'
import { Link } from 'react-router'

export function Header(): React.ReactElement {
  const { user } = useContext<UserContextType>(UserContext)
  const [searchQuery, setSearchQuery] = useState('')

  function handleChangeInputSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.target.value)
  }

  return (
    <header>
      <nav className={styles.navbar}>
        <NavLink to="/" className="">Logo</NavLink>
        <ul className="">
          <li className="nav-item">
            <NavLink className="" to="/all-posts">All Posts</NavLink>
          </li>
        </ul>
        <form className="" role="search">
          <input className="" type="search" placeholder="Search..." aria-label="Search" onChange={handleChangeInputSearch} />
          <Link to={`/search-results/${searchQuery}`}><button className="" type="submit" disabled={!searchQuery}>Search</button></Link>
        </form>
        <UserPick userName={user}></UserPick>
      </nav>
    </header>
  )
}