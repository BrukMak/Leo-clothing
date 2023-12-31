import './cart-dropdown.style.scss';
import Button from '../button/button.component';
import { CartContext } from '../../context/cart.context';
import { useContext } from 'react';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';


const CartDropdown = () => {
    const {isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);
    const navigate = useNavigate()
    const navigateToCheckout = () => {
        navigate('/checkout');
        const toggle = () => setIsCartOpen(!isCartOpen);
        toggle();
        
    }
    
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>  
                {cartItems.map( (item) => <CartItem cartItem={item} key={item.id}  />)}
            </div>

            <Button onClick={navigateToCheckout} > Check-out </Button>
        </div>
    )
}

export default CartDropdown;