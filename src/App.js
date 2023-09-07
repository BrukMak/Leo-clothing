import  './categories.styles.scss';
import CategoryContainer from './components/category-menu/CategoryContainer';
import data from './components/data/Data.json';

const App = () => {
  const categories = data.categories;
  return (
    <CategoryContainer categories = {categories} />
  );
}

export default App;
