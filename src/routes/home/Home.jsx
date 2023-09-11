import  '../../categories.styles.scss';
import CategoryContainer from '../../components/category-menu/CategoryContainer';
import data from '../../components/data/Data.json';
import { Outlet } from 'react-router-dom';

const Home = () => {
  const categories = data.categories;
  return (
  <div>
    <CategoryContainer categories = {categories} />
  </div>

  )}

export default Home;
