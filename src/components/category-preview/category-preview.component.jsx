import { Link } from "react-router-dom";
import ProductsCard from "../products-card-component/products-card.component";

import {CategoryPreviewContaner, Preview, Title} from './category-preview.styles.jsx';

const CategoryPreview = ( {title, products}) => {              
    
    return(

        <CategoryPreviewContaner>

            <h2> 
                <Title to={title}> {title.toUpperCase()}  </Title>
            </h2>
            <Preview>
                {
                    products.filter((_, i) => i < 4)
                    .map((product) => (

                        <ProductsCard key={product.id} product={product} />
                    )
                )
                }
                    
            </Preview>
        </CategoryPreviewContaner>
        
    )
          
                  

};

export default CategoryPreview;