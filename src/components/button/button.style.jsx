import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  border-radius: 5px;
  
  
  

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

`
export const GoogleSignInButton = styled(BaseButton)`
  & {
  background-color: #4285f4;
  color: white;
  justify-content: space-between;

  .button-image{
    display: flex;
    width: 30px;
    margin: 10px auto;

    
  }
  

  &:hover {
    background-color: #357ae8;
    border: none;
  }
}

`
export const InvertedButton = styled(BaseButton)`
& {
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }

`


// .button-container {
//     min-width: 165px;
//     width: auto;
//     height: 50px;
//     letter-spacing: 0.5px;
//     line-height: 50px;
//     padding: 0 35px 0 35px;
//     font-size: 15px;
//     background-color: black;
//     color: white;
//     text-transform: uppercase;
//     font-family: 'Open Sans';
//     font-weight: bolder;
//     border: none;
//     cursor: pointer;
//     display: flex;
//     justify-content: space-around;
//     border-radius: 5px;
    
    
   
  
//     &:hover {
//       background-color: white;
//       color: black;
//       border: 1px solid black;
//     }
  
//     &.google-sign-in {
//       background-color: #4285f4;
//       color: white;
//       justify-content: space-between;

//       .button-image{
//         display: flex;
//         width: 30px;
//         margin: 10px auto;

        
//       }
      
  
//       &:hover {
//         background-color: #357ae8;
//         border: none;
//       }
//     }
  
//     &.inverted {
//       background-color: white;
//       color: black;
//       border: 1px solid black;
  
//       &:hover {
//         background-color: black;
//         color: white;
//         border: none;
//       }
//     }
//   }
  