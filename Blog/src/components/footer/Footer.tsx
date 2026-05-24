import styles from './Footer.module.scss'

export function Footer(): React.ReactElement {

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div>© 2026, Khai-nou</div>
        <div>All rights reserved</div>
      </div>
    </footer>
  )
}