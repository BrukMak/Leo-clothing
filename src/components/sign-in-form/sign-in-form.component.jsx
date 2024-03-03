import { useState } from "react"
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import FormInput  from '../form-input/form-input.component';
import { SignUpContainer, ButtonsContainer } from './sign-in-form.style.jsx';
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const defaultFormFields = {
    email : '',
    password : '',
}

const SignInForm = () => {
    console.log("Sign IN")
    const [formFields, setFormField] = useState(defaultFormFields);
    const {email, password} = formFields;

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
        

    }

    const resetFields = () => {
        setFormField(defaultFormFields);
    }
    const onChangeHandler = (event) => {

        const {name, value} = event.target;
        setFormField({...formFields, [name] : value })
        
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFields();
           
        } catch (error) {
            if (error.code === 'auth/invalid-login-credentials'){
                alert('Email or password not correct')
            }
            else if (error.code === 'auth/popup-closed-by-user'){
                console.log('The wierd error')
            }

            console.log(error.message, "test");
        }
    }

    return (
        <SignUpContainer >
            <h2>Already have an account?</h2>
            <span>Sign in with Email and Password</span>

            <form onSubmit={onSubmitHandler}>
               
                <FormInput 
                    lable = 'Email' 
                    type='email'
                    required 
                    name="email" 
                    onChange={onChangeHandler} 
                    value = {email}
                />
                <FormInput 
                    lable = 'Password' 
                    type='password' 
                    required 
                    name="password" 
                    onChange={onChangeHandler} 
                    value={password}
                />
                <ButtonsContainer>
                    <Button 
                        type='submit'
                    >Sign In</Button>
                    
                    <Button type = "button"
                        buttonType = {BUTTON_TYPE_CLASSES.google}
                        onClick={signInWithGoogle}>Google Sign in</Button>
                </ButtonsContainer>
            </form>

        </SignUpContainer>
    )
    }
export default SignInForm;