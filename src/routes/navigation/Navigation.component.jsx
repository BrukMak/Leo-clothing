import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import './navigation.style.scss'
import { ReactComponent as LeoLogo } from '../../assets/leo-svgrepo-com.svg';
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { SignOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

  
    return (
      <Fragment>
        <div className="navigation">
          <Link className="logo-container" to='/'>
            <LeoLogo className="logo" />
          </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to='/'>
              HOME 
            </Link>
            
            <Link className="nav-link" to='/shop'>
              SHOP 
            </Link>
            {
              currentUser ? (
                <span className="nav-link" onClick={SignOutUser}>SIGN OUT</span>
              ) :(
            <Link className="nav-link" to='/auth'>
              SIGN IN 
            </Link>
              )
            }
          <CartIcon/>
          </div>
          {isCartOpen && <CartDropdown />}
        </div> 
          <Outlet />
      </Fragment>
    )
  }
export default Navigation;