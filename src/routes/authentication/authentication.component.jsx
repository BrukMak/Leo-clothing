import  SignUpForm  from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import './authentication.styles.scss'

{/*
// *******  for sign in with redirect ******
//   useEffect( () => {
//     const getResponse = async () => {
//       const response = await getRedirectResult(auth);
//       if (response){
//         const userDocRef = await createUserDocumentFromAuth(response.user);      

//       }
//     };
//     getResponse();
  
//   }, [])
*/}

export const Authentication = () => {

    return (
    <div className="authentication-container">
      <SignInForm className="sign-in-component" />
      <SignUpForm />
    </div>
  )
}

export default Authentication;

