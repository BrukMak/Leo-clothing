import React, { useContext } from "react";
// import CheckoutItemList from "../../components/checkout-item-list/checkout-item-list.component";
import { Total, Header, CheckoutHeader, CheckoutContainer } from './checkout.style.jsx'; 
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../context/cart.context";


const Checkout = () => {
    const {cartItems, totalItemsPrice} = useContext(CartContext);
   
    
    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <Header>
                    <span >Products</span>
                </Header>
                <Header>
                    <span>Description</span></Header>
                <Header>
                    <span >Quantity</span>
                </Header>
                <Header><span >Price</span></Header>
                <Header>

                    <span>Remove</span>
                </Header>
            </CheckoutHeader>

                {cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
            <Total>Total: {totalItemsPrice}</Total>

        </CheckoutContainer>
    );
}

export default Checkout;