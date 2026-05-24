import { useState } from 'react'
import { FormField } from '../formField/FormField'
import styles from './FormSignIn.module.scss'
import { ChangeEvent } from 'react'
import { Link, useNavigate } from 'react-router'

type FormSignInProps = {
  email?: string
  password?: string
}

export function FormSignIn(props: FormSignInProps): React.ReactElement {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const formData = {
    email: email,
    password: password
  }
  const navigate = useNavigate()

  function handleChangeEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)
  }

  function handleChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value)
  }

  function handleSubmitForm(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    navigate('/')
    
    return formData
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <div>
        <FormField
          id="email"
          label="Email"
          type="email"
          value={props.email}
          onChange={handleChangeEmail} />
      </div>
      <div>
        <FormField
          id="password"
          label="Password"
          type="password"
          value={props.password}
          onChange={handleChangePassword} />
      </div>
      <a className={styles.text} href="#">Forgot password?</a>
      <button type="submit" className={styles.button}>Sign In</button>
      <p className={styles.text}>No account? <Link className={styles.linkSignUp} to="/sign-up">Sign Up</Link></p>
    </form>
  )
}