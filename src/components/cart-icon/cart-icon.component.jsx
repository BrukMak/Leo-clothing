import {CartIconContainer, ShoppingIconContainer, ItemCount} from './cart-icon.style';
import  { ReactComponent as ShopingIcon } from '../../assets/shopping-bag.svg'
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartItemsQuantity } = useContext(CartContext);
    const toggle = () => setIsCartOpen(!isCartOpen);
    return (
        <CartIconContainer onClick={toggle}>
            <ShoppingIconContainer />
            <ItemCount>{cartItemsQuantity}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;