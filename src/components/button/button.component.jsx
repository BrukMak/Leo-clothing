import {
    BaseButton,
    GoogleSignInButton,
    InvertedButton,
  } from './button.style';
  
  export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted',
  };
  
  const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => {
    const buttonComponents = {
      [BUTTON_TYPE_CLASSES.base]: BaseButton,
      [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
      [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    };
  
    // Check if the provided buttonType is valid, otherwise default to BaseButton
    const selectedButton = buttonComponents[buttonType] || BaseButton;
  
    return selectedButton;
  };
  
const Button = ({ children, buttonType, ...otherProps }) => {
    // console.log(typeof(buttonType))
    const CustomButton =  getButton(buttonType);
    return (
    <CustomButton {...otherProps}>{children}</CustomButton>

  )};

export default Button;