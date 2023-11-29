import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput  from '../../components/form-input/form-input.component';
import './sign-up-form.style.scss';
import Button from "../button/button.component";

const defaultFormFields = {
    displayName : '',
    email : '',
    password : '',
    comfirmPassword: '',
}

const SignUpForm = () => {

    const [formFields, setFormField] = useState(defaultFormFields);
    const {displayName, email, password, comfirmPassword} = formFields;
    
    
    const onChangeHandler = (event) => {

        const {name, value} = event.target; 
        setFormField({...formFields, [name] : value })

        
    }

    const resetFields = () => {
        setFormField(defaultFormFields);
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        if (password !== comfirmPassword) {
            alert("Passwords do not match");
            return;
        }
        
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            resetFields();
            
        } catch (error) {
            if  (error.code === 'auth/email-already-in-use'){
                alert('Email already in use')
            }else{
                console.error("Error creating user: ", error);
            }
        }
    }

    return (
        <div className='sign-up-container' >
            <h2>Don't have an account?</h2>
            <span>Sign Up with Email and Password</span>

            <form onSubmit={onSubmitHandler}>
                <FormInput 
                lable = 'Display Name' 
                type = 'text'
                required
                name = "displayName"
                onChange = {onChangeHandler}
                value = {displayName}
                />
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
                <FormInput 
                lable = 'ComfirmPassword' 
                type='password' 
                required 
                name="comfirmPassword" 
                onChange={onChangeHandler} 
                value = {comfirmPassword}
                />

                <Button 
                children = "Sign Up"
                buttonType={''}
                type='submit' />
            </form>

        </div>
    )
    }
export default SignUpForm;