import { ReactNode } from 'react'
import styles from './island.module.scss'

type IslandProps = {
  children: ReactNode
}

export function Island(props: IslandProps): React.ReactElement {
  return (
    <div className={styles.island}>{props.children}</div>
  )
}