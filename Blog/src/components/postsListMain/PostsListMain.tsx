import styles from './PostsListMain.module.scss'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import type { PostsState, PostModel, PaginationProps } from '../../types'
import { PostCard } from '../postCard/PostCard'
import { useEffect, useState, useMemo } from 'react'
import { fetchPosts } from '../../redux/posts-slice'
import { useParams, NavLink } from 'react-router'
import { buildPagination } from '../../utils/buildPagination'

function resolveActiveClass({ isActive }: PaginationProps) {
  return isActive ? `${styles.paginationLink} ${styles.active}` : `${styles.paginationLink}`
}

export function PostsListMain(): React.ReactElement {
  const { currentPage } = useParams()
  const { data: posts, totalPages, loading, error } = useAppSelector((state): PostsState => state.posts)
  const dispatch = useAppDispatch()

  // false - без сортировки | 'asc' - A-Z
  const [sortOrder, setSortOrder] = useState<false | 'asc'>(false)

  useEffect((): void => {
    const page = Number(currentPage) || 1
    const limit = 15
    const maxPosts = 500
    const offset = (page - 1) * limit

    // для последней страницы ограничиваем кол-во постов
    const adjustedLimit = offset + limit > maxPosts ? maxPosts - offset : limit

    if (offset < maxPosts) {
      dispatch(fetchPosts({ limit: adjustedLimit, offset }))
    }
  }, [currentPage, dispatch])

  // возвращаем отсортированную копию
  const sortedPosts = useMemo(() => {
    if (!posts) return []

    const limitedPosts = posts.slice(0, 500)

    if (sortOrder === 'asc') {
      return [...limitedPosts].sort((a, b) => a.title.localeCompare(b.title))
    }
    return limitedPosts
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
      <div>Loading error</div>
    )
  }

  function renderPagination(): React.ReactElement | null {
    if (totalPages <= 1 || loading || error || posts.length === 0) {
      return null
    }

    const limitedTotalPages = Math.min(totalPages, Math.ceil(500 / 15))

    const paginationScheme = buildPagination(Number(currentPage), limitedTotalPages)

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