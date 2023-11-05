import './button.style.scss';
import {ReactComponent as GoogleLogo} from '../../assets/google.svg'
const buttonTypesClasses ={
    google : "google-sign-in",
    inverted : "inverted"
}

const Button = ({ children, buttonType, ...otherProps }) => {
    return (
        <button className={`button-container ${buttonTypesClasses[buttonType]}`} {...otherProps}>
            
           
             {children }
        </button>
    )
}

export default Button;