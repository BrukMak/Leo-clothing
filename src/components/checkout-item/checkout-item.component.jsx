import { useEffect, useContext, useState } from 'react';
import './checkout-item.styles.scss';
import { CartContext } from '../../context/cart.context';



const CheckoutItem = ({cartItem}) => {
   
    const {id, name, price, quantity, imageUrl} = cartItem;
    const {cartItems, addItemsToCart, removeItemFromCart} = useContext(CartContext);

    
    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            
            <span className="name">{ name } </span>
           
            <span className='quantity'>
                <span className='arrow' onClick={()=>{removeItemFromCart(cartItem)}}>&#45;</span>
                 <span className='value'>
                    { quantity }
                 </span>
                 <span className="arrow" onClick={()=>addItemsToCart(cartItem)}>&#43;</span>
            </span>
            
            <span className='price'> ${ quantity * price } </span>
            <span className="remove-button"   onClick={()=>{removeItemFromCart(cartItem, true)}}> &#10005; </span>

        </div>
    )
}

export default CheckoutItem;