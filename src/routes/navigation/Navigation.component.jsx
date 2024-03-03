import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import {NavigationContainer, LogoContainer,Logo, NavLinks, NavLink } from "./navigation.style";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { SignOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

  
    return (
      <Fragment>
        <NavigationContainer >
          <LogoContainer to='/'>
            <Logo />
          </LogoContainer>
          <NavLinks >
            <NavLink  to='/'>
              HOME 
            </NavLink>
            
            <NavLink to='/shop'>
              SHOP 
            </NavLink>
            {
              currentUser ? (
                <NavLink onClick={SignOutUser}>SIGN OUT</NavLink>
              ) :(
            <NavLink to='/auth'>
              SIGN IN
            </NavLink>
              )
            }
          <CartIcon/>
          </NavLinks>
          {isCartOpen && <CartDropdown />}
        </NavigationContainer> 
          <Outlet />
      </Fragment>
    )
  }
export default Navigation;