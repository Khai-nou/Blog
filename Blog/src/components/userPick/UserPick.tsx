import type { UserPickProps } from '../../types'
import styles from './UserPick.module.scss'

export function UserPick(props: UserPickProps): React.ReactElement | null {
  if (!props.userName) {
    return null
  }

  const userNameArr: string[] = props.userName.split(' ')
  const abbrev: string = userNameArr.map(name => name[0]).join('')

  return (
    <div className={styles.userPick}>
      <div className={styles.avatarWrapper}>
        <p className={styles.userAvatar}>{abbrev}</p>
      </div>
      <p className={styles.userName}>{props.userName}</p>
    </div>
  )
}