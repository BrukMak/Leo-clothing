import { useContext } from 'react';
import { ProductsContext } from '../../context/product.context'
import ProductsCard from '../../components/products-card-component/products-card.component';
import './shop.style.scss';

const Shop = () => {
    const { products } = useContext(ProductsContext) ;
      
    return (
    <div className='products-container'>
        {products.map((product) => (
            <ProductsCard key={product.id} products={product} />  
        ))}
    </div>
    )
} 

export default Shop;