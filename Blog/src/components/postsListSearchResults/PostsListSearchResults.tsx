import styles from './PostsListSearchResults.module.scss'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import type { PostsState, PostModel } from '../../types'
import { PostCard } from '../postCard/PostCard'
import { useEffect } from 'react'
import { fetchPosts } from '../../redux/posts-slice'
import { useParams } from 'react-router'

export function PostsListSearchResults(): React.ReactElement {
  const { currentPage } = useParams()
  const { data: posts, loading, error } = useAppSelector((state): PostsState => state.posts)
  const dispatch = useAppDispatch()

  useEffect((): void => {
    const offset = (Number(currentPage) - 1) * 10
    dispatch(fetchPosts({ limit: 10, offset }))
  }, [currentPage, dispatch])

  const { searchQuery } = useParams()

  // filter data by searchQuery
  const filteredPosts = posts.filter((item) => {
    if (item.title.toLowerCase().includes(searchQuery?.toLowerCase() ?? '')) {
      return true
    } else {
      return false
    }
  })

  function renderPosts() {
    if (error || loading) {
      return null
    }

    if (filteredPosts) {
      return (
        <div className={styles.flex}>
          {filteredPosts.map((post: PostModel) => {
            return (
              <div key={post.id} className={styles.post}>
                <PostCard {...post} />
              </div>
            )
          })}
        </div>
      )
    }
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

  return (
    <>
      {renderPosts()}
      {renderLoading()}
      {renderError()}
    </>
  )
}