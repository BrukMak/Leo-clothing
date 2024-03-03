import { Link } from 'react-router-dom';
import {CategoryContainer, BackgroundImage, Body} from './category-item.style.jsx';
import React from 'react';

const CategoryItem = ({ category }) => {
  const { imageUrl, title} = category;
    return (
      // <Link to={"shop/" + title.toLowerCase()}>
        <CategoryContainer to={"shop/" + title.toLowerCase()}>
          <BackgroundImage imageUrl = {imageUrl}/>
          <Body>
            
            <h2>
              <Link to={"shop/" + title.toLowerCase()}>
                {title}
              </Link>
              </h2>
            <p>Shop Now</p>
          </Body>
        </CategoryContainer>
      // </Link>
  )
}
export default CategoryItem;
