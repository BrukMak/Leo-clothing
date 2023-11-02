import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import './navigation.style.scss'
import { ReactComponent as LeoLogo } from '../../assets/leo-svgrepo-com.svg';

const Navigation = () => {
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
            <Link className="nav-link" to='/signin'>
              SIGN IN 
            </Link>

          </div>
        </div> 
          <Outlet />
      </Fragment>
    )
  }
export default Navigation;