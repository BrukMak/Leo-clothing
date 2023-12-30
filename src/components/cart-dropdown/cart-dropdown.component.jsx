import './cart-dropdown.style.scss';
import Button from '../button/button.component';
import { CartContext } from '../../context/cart.context';
import { useContext } from 'react';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
   
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                
                {cartItems.map( (item) => <CartItem cartItem={item} key={item.id}  />)}
            </div>

            <Button> Check-out </Button>
        </div>
    )
}

export default CartDropdown;