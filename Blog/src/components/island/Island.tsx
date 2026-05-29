import styles from './Island.module.scss'
import type { IslandProps } from '../../types'

export function Island(props: IslandProps): React.ReactElement {
  return (
    <div className={styles.island}>{props.children}</div>
  )
}