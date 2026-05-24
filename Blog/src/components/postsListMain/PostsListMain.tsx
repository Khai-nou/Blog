import styles from './PostsListMain.module.scss'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import type { PostsState, PostModel } from '../../types'
import { PostCard } from '../postCard/PostCard'
import { useEffect, useState, useMemo } from 'react'
import { fetchPosts } from '../../redux/posts-slice'
import { useParams, NavLink } from 'react-router'
import { buildPagination } from '../../utils/buildPagination'

type PaginationProps = {
  isActive: boolean
}

export function PostsListMain(): React.ReactElement {
  const { currentPage } = useParams()
  const { data: posts, totalPages, loading, error } = useAppSelector((state): PostsState => state.posts)
  const dispatch = useAppDispatch()

  // false - без сортировки | 'asc' - A-Z
  const [sortOrder, setSortOrder] = useState<false | 'asc'>(false)

  useEffect((): void => {
    const offset = (Number(currentPage) - 1) * 15
    dispatch(fetchPosts({ limit: 15, offset }))
  }, [currentPage, dispatch])

  // возвращаем отсортированную копию
  const sortedPosts = useMemo(() => {
    if (!posts) return []
    if (sortOrder === 'asc') {
      return [...posts].sort((a, b) => a.title.localeCompare(b.title))
    }
    return posts
  }, [posts, sortOrder])

  // обработчик для кнопки сортировки
  const handleClickButtonSort = (): void => {
    setSortOrder((prev) => (prev === 'asc' ? false : 'asc'))
  }

  function renderPostsList() {
    if (loading || !posts || posts.length === 0) {
      return null
    }

    return (
      <div className={styles.flex}>
        {sortedPosts.map((post: PostModel): React.ReactElement => (
          <div key={post.id} className={styles.post}>
            <PostCard {...post} />
          </div>
        ))}
      </div>
    )
  }

  function renderLoading(): React.ReactElement | null {
    if (!loading) {
      return null
    }

    return (
      <div>Loading...</div>
    )
  }

  function renderError(): React.ReactElement | null {
    if (!error) {
      return null
    }

    return (
      <div role="alert">Loading error</div>
    )
  }

  function renderPagination(): React.ReactElement | null {
    if (totalPages <= 1 || loading || error || posts.length === 0) {
      return null
    }

    function resolveActiveClass({ isActive }: PaginationProps) {
      return isActive ? `${styles.paginationLink} ${styles.active}` : `${styles.paginationLink}`
    }

    const paginationScheme = buildPagination(Number(currentPage), totalPages)
    return (
      <nav>
        <ul className={styles.pagination}>
          {paginationScheme.map((page: number | string) => {

            if (page === '...') {
              return (
                <li className={styles.paginationItem} key={Date.now().toString(36) + Math.random().toString(36).substr(2)}>
                  <span>{page}</span>
                </li>
              )
            }

            return (
              <li className={styles.paginationItem} key={page}>
                <NavLink className={resolveActiveClass} to={`/all/${page}`}>{page}</NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }

  return (
    <>
      <button className={styles.button} onClick={handleClickButtonSort} disabled={loading || !!error}>
        {sortOrder === 'asc' ? 'Reset sorting' : 'Sort by name A-Z'}
      </button>

      {renderPagination()}
      {renderPostsList()}
      {renderLoading()}
      {renderError()}
      {renderPagination()}
    </>
  )
}