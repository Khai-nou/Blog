import styles from './Breadcrumb.module.scss'
import type { BreadcrumbProps } from '../../types'

export function Breadcrumb(props: BreadcrumbProps): React.ReactElement {
  return (
    <div className={styles.breadcrumb}>
      <span className={styles.breadcrumb}>{props.children}</span>
      <span>{props.postNumber}</span>
    </div>
  )
}