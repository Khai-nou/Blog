import { useEffect } from 'react'
import styles from './Post.module.scss'
import { useParams } from 'react-router'
import type { PostModel, PostsState } from '../../types'
import { useAppSelector, useAppDispatch } from '../../redux/store'
import { fetchPosts } from '../../redux/posts-slice'
import { Title } from '../title/Title'

export function PostComponent(): React.ReactElement {
  const { postId } = useParams<string>()

  const { data: posts, loading } = useAppSelector((state): PostsState => state.posts)
  const dispatch = useAppDispatch()

  useEffect((): void => {
    dispatch(fetchPosts({ limit: 500, offset: 0 }))
  }, [dispatch])

  function renderPosts() {
    if (posts) {
      const post = posts.find((item: PostModel) => item.id === Number(postId))

      if (loading) {
        return <div>Loading post...</div>
      }

      if (!post) {
        return <div>Post not found.</div>
      }

      return (
        <>
          <Title>{post?.title}</Title>
          <div className={styles.imageWrapper}>
            <img className={styles.image} src={post?.image_url} alt="Post Image" />
          </div>
          <div className={styles.text}>
            <p>{post?.summary}</p>
          </div>
        </>
      )
    }
  }

  return (
    <>
      {renderPosts()}
    </>
  )
}