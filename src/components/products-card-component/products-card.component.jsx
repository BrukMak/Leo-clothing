import './products-card.style.scss';
import '../button/button.component';
import Button from '../button/button.component';

const ProductsCard = ({products}) => {
    const {name, price, imageUrl} = products;
    return (
        <div className='product-card-container' >
            <img src={imageUrl} alt= {`${name}`} />
            <div className='footer' >
                <span className='name'> {name} </span>
                <span className='price'>  {`$${price}`} </span>
            </div>
            <Button buttonType='reversed'> Add to Cart </Button>
        </div>
    );
}

export default ProductsCard;