import {CartItemContainer, Img, ItemDetail, Name} from './cart-item.styles.jsx';

import './cart-item.styles.jsx';


const CartItem = ( {cartItem} ) => {
    const { id, name, imageUrl, price, quantity } = cartItem;
    return(
        <CartItemContainer key={id}>
            <Img src={imageUrl} alt={`${name}`} />
            <ItemDetail>
                <Name>{ name }</Name>
                <Name > { quantity } X ${price} </Name>
            </ItemDetail>
        </CartItemContainer>
    )
}

export default CartItem;