import {CartItemContainer, Img, ItemDetail, Name} from './cart-item.styles.jsx';

const CartItem = ( {cartItem} ) => {
    const { id, name, imageUrl, price, quantity } = cartItem;
    return(
        <CartItemContainer key={id}>
            <Img src={imageUrl} alt={`${name}`} />
            <ItemDetail>
                <Name>{ name }</Name>
                <span className='price'> { quantity } X ${price} </span>
            </ItemDetail>
        </CartItemContainer>
    )
}

export default CartItem;