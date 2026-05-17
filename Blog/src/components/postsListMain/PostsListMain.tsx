import styles from './PostsListMain.module.scss'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import type { PostsState, PostModel } from '../../types'
import { PostCard } from '../postCard/PostCard'
import { useEffect } from 'react'
import { fetchPosts } from '../../redux/posts-slice'

export function PostsListMain(): React.ReactElement {
  const { data: posts, loading, error } = useAppSelector((state): PostsState => state.posts)
  const dispatch = useAppDispatch()

  useEffect((): void => {
    dispatch(fetchPosts())
  }, [])

  function renderPosts() {
    if (error || loading) {
      return null
    }
    
    if (posts) {
      return (
        <div className={styles.grid}>
          <div className={styles.post}>
            {posts.map((post: PostModel) => {
              return (
                <div key={post.id}>
                  <PostCard {...post} />
                </div>
              )
            })}
          </div>
        </div>
      )
    }
  }

  function renderLoading(): React.ReactElement | null {
    if (!loading) {
      return null
    }

    // review
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