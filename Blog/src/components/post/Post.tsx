import { useEffect } from 'react'
import styles from './Post.module.scss'
import { useParams } from 'react-router'
import type { PostModel, PostsState } from '../../types'
import { useAppSelector, useAppDispatch } from '../../redux/store'
import { fetchPosts } from '../../redux/posts-slice'
import { Title } from '../title/Title'

export function PostComponent(): React.ReactElement {
  const { postId } = useParams<string>()

  const { data: posts } = useAppSelector((state): PostsState => state.posts)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [postId])

  function renderPosts() {
    if (posts) {
      const post = posts.find((item: PostModel) => item.id === Number(postId))
      console.log(posts)
      console.log(post)
      return (
        <>
          {/* <h2 className={styles.header}>{post?.title}</h2> */}
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