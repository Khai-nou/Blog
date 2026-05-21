import { Breadcrumb } from '../components/breadcrumb/Breadcrumb'
import { Island } from '../components/island/Island'
import { FormSignUp } from '../components/formSignUp/FormSignUp'
import { Link } from 'react-router'

export function SignUp(): React.ReactElement {

  return (
    <>
      <Breadcrumb><Link to="/">Home</Link></Breadcrumb>
      <Island>
        <FormSignUp />
        <p className="text-center">Already have an account? <Link to="/sign-in">Sign In</Link></p>
      </Island>
    </>
  )
}