import { useParams } from "react-router-dom"; 
import { Fragment, useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../context/categories.context";
import ProductsCard from "../../components/products-card-component/products-card.component";
import './category.styles.scss';

const Category = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    const { category } = useParams();
    const [products, setProducts] = useState(categoriesMap[category]);
    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])
return (
    <Fragment>

        <h2 className="category-title"> {category.toUpperCase()} </h2>
        <div className="detail-category-container"> 
            {   products &&
                products.map((product) => (
                    <ProductsCard key={ product.id } product={product} />
                ))
            }
        </div>

    </Fragment>

)
}

export default Category;