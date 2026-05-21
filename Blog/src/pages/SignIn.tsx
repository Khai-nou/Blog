import { Breadcrumb } from '../components/breadcrumb/Breadcrumb'
import { Island } from '../components/island/Island'
import { FormSignIn } from '../components/formSignIn/FormSignIn'
import { Link } from 'react-router'

export function SignIn(): React.ReactElement {

  return (
    <>
      <Breadcrumb><Link to="/">Home</Link></Breadcrumb>
      {/* <Title></Title> */}
      <Island>
        <FormSignIn />
        <p className="">No account? <Link to="/sign-up">Sign Up</Link></p>
      </Island>
    </>
  )
}