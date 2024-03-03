import  SignUpForm  from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import {AuthenticationContainer} from './authentication.styles.jsx'


const Authentication = () => {
    console.log("Auth");
    return (
    <AuthenticationContainer>
      <SignInForm className="sign-in-component" />
      <SignUpForm />
    </AuthenticationContainer>
  )
}

export default Authentication;

