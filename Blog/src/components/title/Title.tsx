import styles from './Title.module.scss'
import { ReactNode } from 'react'

type TitleProps = {
  children: ReactNode
}

export function Title(props: TitleProps): React.ReactElement {
  return <h1 className={styles.title}>{props.children}</h1>
}