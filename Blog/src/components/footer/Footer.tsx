import styles from './Footer.module.scss'

export function Footer(): React.ReactElement {

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className="">Some text</div>
        <div className="">Some text</div>
      </div>
    </footer>
  )
}