import './products-card.style.scss';
import '../button/button.component';
import Button from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const ProductsCard = ({products}) => {
    
    const {name, price, imageUrl} = products;
    const { addItemsToCart } = useContext(CartContext);
    
    const addProductToCart = () => {addItemsToCart(products)}
    
    
    return (
        <div className='product-card-container' >
            <img src={imageUrl} alt= {`${name}`} />
            <div className='footer' >
                <span className='name'> {name} </span>
                <span className='price'>  {`$${price}`} </span>
            </div>
            <Button buttonType='reversed' onClick={addProductToCart}> Add to Cart </Button>
        </div>
    );
}

export default ProductsCard;