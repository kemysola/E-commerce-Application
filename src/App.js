import './App.css';
import AddProducts from './components/products/AddProducts';
import AllProducts from './components/products/AllProducts';
import NewProducts from './components/products/NewProducts';
import ProductById from './components/products/ProductById';

function App() {
  return (
    <div>
      <AllProducts/>
      <ProductById/>
      {/* <AddProducts/>
      <NewProducts/> */}
      
    </div>
  );
}

export default App;
