import { Breadcrumb } from '../components/breadcrumb/Breadcrumb'
import { Island } from '../components/island/Island'
import { FormSignUp } from '../components/formSignUp/FormSignUp'
import { Link } from 'react-router'
import { Title } from '../components/title/Title'

export function SignUp(): React.ReactElement {

  return (
    <>
      <Breadcrumb><Link to="/all/1">Home</Link></Breadcrumb>
      <Title>Sign Up</Title>
      <Island>
        <FormSignUp />
      </Island>
    </>
  )
}