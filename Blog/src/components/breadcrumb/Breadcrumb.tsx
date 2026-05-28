import { ReactNode } from 'react'
import styles from './Breadcrumb.module.scss'

type BreadcrumbProps = {
  children: ReactNode
  postNumber?: number | string
}

export function Breadcrumb(props: BreadcrumbProps): React.ReactElement {
  return (
    <div className={styles.breadcrumb}>
      <span className={styles.breadcrumb}>{props.children}</span>
      <span>{props.postNumber}</span>
    </div>
  )
}