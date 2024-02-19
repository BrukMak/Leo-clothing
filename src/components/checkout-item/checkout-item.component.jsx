import { useEffect, useContext, useState } from 'react';
import {RemoveButton, Value, Arrow, Quantity, Text, Img, 
ImageContainer, CheckoutItemContainer } from './checkout-item.styles';
import { CartContext } from '../../context/cart.context';



const CheckoutItem = ({cartItem}) => {
   
    const {id, name, price, quantity, imageUrl} = cartItem;
    const {cartItems, addItemsToCart, removeItemFromCart} = useContext(CartContext);

    
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <Img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            
            <Text>{ name } </Text>
           
            <Quantity>
                <Arrow onClick={()=>{removeItemFromCart(cartItem)}}>&#45;</Arrow>
                 <Value>
                    { quantity }
                 </Value>
                 <Arrow onClick={()=>addItemsToCart(cartItem)}>&#43;</Arrow>
            </Quantity>
            
            <Text> ${ quantity * price } </Text>
            <RemoveButton  onClick={()=>{removeItemFromCart(cartItem, true)}}> &#10005; </RemoveButton>

        </CheckoutItemContainer>
    )
}

export default CheckoutItem;