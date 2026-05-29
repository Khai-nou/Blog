import styles from './Title.module.scss'
import type { TitleProps } from '../../types'

export function Title(props: TitleProps): React.ReactElement {
  return <h1 className={styles.title}>{props.children}</h1>
}