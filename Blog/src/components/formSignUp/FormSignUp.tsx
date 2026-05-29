import { useState } from 'react'
import { FormField } from '../formField/FormField'
import styles from './FormSignUp.module.scss'
import { ChangeEvent } from 'react'
import { Link } from 'react-router'
import type { formSignUpProps } from '../../types'

export function FormSignUp(props: formSignUpProps): React.ReactElement {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const formData = {
    name: name,
    email: email,
    password: password,
    passwordConfirm: passwordConfirm
  }

  function handleChangeName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)
  }

  function handleChangeEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)
  }

  function handleChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value)
  }

  function handleChangePasswordConfirm(event: ChangeEvent<HTMLInputElement>) {
    setPasswordConfirm(event.target.value)
  }

  function handleSubmitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <div>
        <FormField
          id="name"
          label="Name"
          type="text"
          value={props.name}
          onChange={handleChangeName} />
      </div>
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
      <div>
        <FormField
          id="passwordConfirm"
          label="Confirm password"
          type="password"
          value={props.passwordConfirm}
          onChange={handleChangePasswordConfirm} />
      </div>
      <button type="submit" className={styles.button}>Sign Up</button>
      <p className={styles.text}>Already have an account? <Link to="/sign-in" className={styles.linkSignIn}>Sign In</Link></p>
    </form>
  )
}