import React, { useContext } from "react";
import CheckoutItemList from "../../components/checkout-item-list/checkout-item-list.component";
import './checkout.style.scss'; 
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../context/cart.context";


const Checkout = () => {
    const {cartItems, totalItemsPrice} = useContext(CartContext);
   
    
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span >Products</span>
                </div>
                <div  className="header-block">
                    <span>Description</span></div>
                <div  className="header-block">
                    <span >Quantity</span>
                </div>
                <div className="header-block"><span >Price</span></div>
                <div className="header-block">

                    <span>Remove</span>
                </div>
            </div>

                {cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
            <span className="total">Total: {totalItemsPrice}</span>

        </div>
    );
}

export default Checkout;