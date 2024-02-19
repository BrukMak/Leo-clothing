import { Link } from 'react-router-dom';
import {CategoryContainer, BackgroundImage, CategoryBodyContainer, p, h2} from './category-item.style.jsx';
import React from 'react';

const CategoryItem = ({ category }) => {
  const { imageUrl, title} = category;
    return (
    <CategoryContainer>
          <BackgroundImage style={{
            backgroundImage: `url(${imageUrl})`
            }}/>
          <CategoryBodyContainer>
            
            <h2>
              <Link to={"shop/" + title.toLowerCase()}>
                {title}
              </Link>
              </h2>
            <p>Shop Now</p>
          </CategoryBodyContainer>
        </CategoryContainer>
  )
}
export default CategoryItem;
