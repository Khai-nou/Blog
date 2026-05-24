import { Breadcrumb } from '../components/breadcrumb/Breadcrumb'
import { Island } from '../components/island/Island'
import { FormSignIn } from '../components/formSignIn/FormSignIn'
import { Link } from 'react-router'
import { Title } from '../components/title/Title'

export function SignIn(): React.ReactElement {

  return (
    <>
      <Breadcrumb><Link to="/">Home</Link></Breadcrumb>
      <Title>Sign In</Title>
      <Island>
        <FormSignIn />
        
      </Island>
    </>
  )
}