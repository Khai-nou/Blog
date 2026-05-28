import styles from './PostsListSearchResults.module.scss'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import type { PostsState, PostModel } from '../../types'
import { PostCard } from '../postCard/PostCard'
import { useEffect, useMemo } from 'react'
import { fetchPosts } from '../../redux/posts-slice'
import { NavLink, useParams } from 'react-router'
import { buildPagination } from '../../utils/buildPagination'

type PaginationProps = {
  isActive: boolean
}

export function PostsListSearchResults(): React.ReactElement {
  const { currentPage, searchQuery } = useParams()
  const { data: posts, loading, error } = useAppSelector((state): PostsState => state.posts)
  const dispatch = useAppDispatch()
  const pageNumber = Number(currentPage) || 1
  const searchString = searchQuery?.toLowerCase() ?? ''

  const allFilteredPosts = useMemo(() => {
    return posts.filter((item) => item.title.toLowerCase().includes(searchString))
  }, [posts, searchString])

  const totalPages = Math.ceil(allFilteredPosts.length / 15)

  const postsToShow = useMemo(() => {
    const offset = (pageNumber - 1) * 15
    return allFilteredPosts.slice(offset, offset + 15)
  }, [allFilteredPosts, pageNumber])


  useEffect((): void => {
    dispatch(fetchPosts({ limit: 500, offset: 0 }))
  }, [dispatch])

  function renderPosts() {
    if (error || loading || postsToShow.length === 0) return null

    return (
      <div className={styles.flex}>
        {postsToShow.map((post: PostModel) => (
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

    function resolveActiveClass({ isActive }: PaginationProps) {
      return isActive ? `${styles.paginationLink} ${styles.active}` : `${styles.paginationLink}`
    }

    const paginationScheme = buildPagination(pageNumber, totalPages)
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
                <NavLink className={resolveActiveClass} to={`/search-results/${searchQuery}/${page}`}>{page}</NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }

  return (
    <>
      {renderPagination()}
      {renderPosts()}
      {renderLoading()}
      {renderError()}
      {renderPagination()}
    </>
  )
}