import './cart-icon.style.scss';
import  { ReactComponent as ShopingIcon } from '../../assets/shopping-bag.svg'
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartItemsQuantity } = useContext(CartContext);
    const toggle = () => setIsCartOpen(!isCartOpen);
    return (
        <div className='cart-icon-container' onClick={toggle}>
            <ShopingIcon className='shopping-icon' />
            <span className='item-count'>{cartItemsQuantity}</span>
        </div>
    )
}

export default CartIcon;