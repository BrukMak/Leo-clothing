import {Footer, Price, ProductCardContainer, Name} from './products-card.style.jsx';
import '../button/button.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const ProductsCard = ({product}) => {
    
    const {name, price, imageUrl} = product;
    const { addItemsToCart } = useContext(CartContext);
    
    const addProductToCart = () => {addItemsToCart(product)}
    
    
    return (
        <ProductCardContainer>
            <img src={imageUrl} alt= {`${name}`} />
            <Footer >
                <Name> {name} </Name>
                <Price>  {`$${price}`} </Price>
            </Footer>
            <Button buttonType= {BUTTON_TYPE_CLASSES.inverted}  onClick={addProductToCart}> Add to Cart </Button>
        </ProductCardContainer>
    );
}

export default ProductsCard;