import styles from './PostsListMain.module.scss'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import type { PostsState, PostModel } from '../../types'
import { PostCard } from '../postCard/PostCard'
import { useEffect, useState, useMemo } from 'react'
import { fetchPosts } from '../../redux/posts-slice'

export function PostsListMain(): React.ReactElement {
  const { data: posts, loading, error } = useAppSelector((state): PostsState => state.posts)
  const dispatch = useAppDispatch()

  // false - без сортировки | 'az' - A-Z
  const [sortOrder, setSortOrder] = useState<false | 'az'>(false)

  useEffect((): void => {
    dispatch(fetchPosts())
  }, [dispatch])

  // возвращаем отсортированную копию
  const sortedPosts = useMemo(() => {
    if (!posts) return []
    if (sortOrder === 'az') {
      return [...posts].sort((a, b) => a.title.localeCompare(b.title))
    }
    return posts
  }, [posts, sortOrder])

  // обработчик для кнопки сортировки
  const handleClickButtonSort = (): void => {
    setSortOrder((prev) => (prev === 'az' ? false : 'az'))
  }

  function renderPostsList() {
    if (error || loading || !posts || posts.length === 0) {
      return null
    }

    return (
      <div className={styles.flex}>
        {sortedPosts.map((post: PostModel) => (
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

  return (
    <>
      <button className={styles.button} onClick={handleClickButtonSort} disabled={loading || !!error}>
        {sortOrder === 'az' ? 'Reset sorting' : 'Sort by name A-Z'}
      </button>

      {renderPostsList()}
      {renderLoading()}
      {renderError()}
    </>
  )
}