// import { useEffect } from "react";
// import { getRedirectResult } from 'firebase/auth';
import {
  // auth,
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
  createUserDocumentFromAuth,

  } from "../../utils/firebase/firebase.utils";

import { SignUpForm } from "../../components/sign-up-form/sign-up-form.component";


export const SignIn = () => {
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

  const logGoogleUser = async () => {

    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);      
  };
  
  return (
    <div>
      
      <h1>Sign in will be shown here</h1>
      <button onClick={logGoogleUser}>
        signIn with google popup
      </button>
      <SignUpForm />
    </div>
  )
}

