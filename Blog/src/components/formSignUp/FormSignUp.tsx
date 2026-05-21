import { useState } from 'react'
import { FormField } from '../formField/FormField'
import styles from './FormSignUp.module.scss'
import { ChangeEvent } from 'react'

type formSignUpProps = {
  name?: string
  email?: string
  password?: string
  passwordConfirm?: string
}

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
      <div className="mb-3">
        <FormField
          id="name"
          label="Name"
          type="text"
          value={props.name}
          onChange={handleChangeName} />
      </div>
      <div className="mb-3">
        <FormField
          id="email"
          label="Email"
          type="email"
          value={props.email}
          onChange={handleChangeEmail} />
      </div>
      <div className="mb-3">
        <FormField
          id="password"
          label="Password"
          type="password"
          value={props.password}
          onChange={handleChangePassword} />
      </div>
      <div className="mb-5">
        <FormField
          id="passwordConfirm"
          label="Confirm password"
          type="password"
          value={props.passwordConfirm}
          onChange={handleChangePasswordConfirm} />
      </div>
      <button type="submit" className={`btn btn-primary mb-3 ${styles.button}`}>Sign Up</button>
    </form>
  )
}