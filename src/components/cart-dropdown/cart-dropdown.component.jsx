import {CartDropdownContainer, CartItemsStyle, EmptyMessage} from './cart-dropdown.style';
// import './cart-dropdown.style.scss';
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
        <CartDropdownContainer >

            {cartItems.length ?(
                    <CartItemsStyle> 
                        {cartItems.map( (item) => <CartItem cartItem={item} key={item.id} />)}
                    </CartItemsStyle>
                     ) 
                 :( 
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                    )    
            } 
            <Button onClick={navigateToCheckout} > Check-out </Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;