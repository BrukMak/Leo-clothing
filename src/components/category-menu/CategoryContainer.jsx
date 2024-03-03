import React from 'react';
import CategoryItem from '../category/CategoryItem';
import { CategoriesContainer } from './category-menu.style.jsx';

const CategoryContainer = ({categories}) => {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
      
    </CategoriesContainer>
  )
}

export default CategoryContainer;