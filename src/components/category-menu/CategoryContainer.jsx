import React from 'react';
import './category-menu.style.scss';
import CategoryItem from '../category/CategoryItem';

const CategoryContainer = ({categories}) => {
  return (
    <div className='categories-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
      
    </div>
  )
}

export default CategoryContainer;