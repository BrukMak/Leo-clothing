import styled from "styled-components" ;

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 270px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  border-radius: 5px;

`
export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
` 

export const CartItems = styled.div `
height: 240px;
display: flex;
flex-direction: column;
overflow: scroll;

`

export const Button  = styled.div`
  margin-top: auto;
`
// .cart-dropdown-container {
//     position: absolute;
//     width: 270px;
//     height: 340px;
//     display: flex;
//     flex-direction: column;
//     padding: 20px;
//     border: 1px solid black;
//     background-color: white;
//     top: 90px;
//     right: 40px;
//     z-index: 5;
//     border-radius: 5px;
  
//     .empty-message {
//       font-size: 18px;
//       margin: 50px auto;
//     }
  
//     .cart-items {
//       height: 240px;
//       display: flex;
//       flex-direction: column;
//       overflow: scroll;
//     }
  
//     button {
//       margin-top: auto;
//     }
//   }
  