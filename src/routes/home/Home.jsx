// import  '../../categories.styles.scss';
import CategoryContainer from '../../components/category-menu/CategoryContainer';
import data from '../../components/data/Data.json';
import { Route, Routes } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';
import Category from '../category/category.component';

const Home = () => {
  const categories = data.categories;
  return (
  // <div>
  //   <CategoryContainer categories = {categories} />
  // </div>
  <Routes>
    <Route index element = {<CategoryContainer categories = {categories} />}></Route>
    <Route path=":category" element = {<Category />} />
  </Routes>

  )}

export default Home;
