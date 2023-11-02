import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";




export const SignIn = () => {
    const logGoogleUser = async () => {

      const {user} = await signInWithGooglePopup();
      createUserDocumentFromAuth(user);      
    };

    return (
      <div>
        
        <h1>Sign in will be shown here</h1>
        <button onClick={logGoogleUser}>
          signIn with google popup
        </button>
      </div>
    )
  }

// export default SignIn;