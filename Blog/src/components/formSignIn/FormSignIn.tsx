import { useState } from 'react'
import { FormField } from '../formField/FormField'
import styles from './FormSignIn.module.scss'
import { ChangeEvent } from 'react'

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

  function handleChangeEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)
  }

  function handleChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value)
  }

  function handleSubmitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="mb-3">
        <FormField
          id="email"
          label="Email"
          type="email"
          value={props.email}
          onChange={handleChangeEmail} />
      </div>
      <div className="mb-1">
        <FormField
          id="password"
          label="Password"
          type="password"
          value={props.password}
          onChange={handleChangePassword} />
      </div>
      <a className="mb-5 d-block" href="#">Reset password</a>
      <button type="submit" className={styles.button}>Sign In</button>
    </form>
  )
}