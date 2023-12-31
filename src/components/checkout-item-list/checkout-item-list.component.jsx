import CheckoutItem from "../checkout-item/checkout-item.component"
import { CartContext } from "../../context/cart.context"
import { useContext } from "react";

const CheckoutItemList = () => {

    const { cartItems } = useContext(CartContext);
    return(
        <div className="checkout-items-container">
            <div className="checkout-item">
                {cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
            </div>
        </div>
    )
}

export default CheckoutItemList; 