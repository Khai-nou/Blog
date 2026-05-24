import styles from './PostCard.module.scss'
import { Link } from 'react-router'
import type { PostProps } from '../../types'

export function PostCard(props: PostProps): React.ReactElement {

  return (
    <div className={styles.container}>
      <div className={styles.cardBody}>
        <div className={styles.imageWrapper}>
          {props.image_url ? <img className={styles.image} src={props.image_url} alt="Image" /> : null}
        </div>
        <p className={styles.date}>{props.published_at}</p>
        <Link to={`/posts/${props.id}`} className={styles.title}><h3 className={styles.title}>{props.title}</h3></Link>
      </div>
    </div>
  )
}