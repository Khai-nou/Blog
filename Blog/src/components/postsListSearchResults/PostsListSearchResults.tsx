import styles from './PostsListSearchResults.module.scss'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import type { PostsState, PostModel } from '../../types'
import { PostCard } from '../postCard/PostCard'
import { useEffect } from 'react'
import { fetchPosts } from '../../redux/posts-slice'
import { useParams } from 'react-router'

export function PostsListSearchResults(): React.ReactElement {
  const { data: posts, loading, error } = useAppSelector((state): PostsState => state.posts)
  const dispatch = useAppDispatch()

  useEffect((): void => {
    dispatch(fetchPosts())
  }, [])

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
      <div className="d-flex justify-content-center align-items-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  function renderError(): React.ReactElement | null {
    if (!error) {
      return null
    }

    return (
      <div className="d-flex justify-content-center align-items-center">
        <div className="alert alert-danger" role="alert">Loading error</div>
      </div>
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