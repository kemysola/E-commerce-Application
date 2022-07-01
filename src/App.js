import AddProducts from './components/products/AddProducts';
import AllProducts from './components/products/AllProducts';
import NewProducts from './components/products/NewProducts';
import ProductById from './components/products/ProductById';
import { Switch, Route, Redirect } from "react-router-dom";
import Home from './components/main/Home';
import Navbar from './navbar/Navbar'
import React from 'react';
import AuthContext from './context/AuthContext';
import Cart from './components/cart/Cart';
function App() {

 const  data = [
    {
      id: 1,	
      name: 'Hong Kong Disneyland',
      category: 'Entertainment'
    }, 
      {
      id: 2,		
      name: 'Repulse Bay and the Beaches',
      category: 'Outdoor'
    }, 
      {
      id: 3,
      name: 'Star Ferry Pier/Victoria Harbour',
      category: 'Attraction'
    }
  ]
  return (
    <React.Fragment>
           {/* <Navbar/> */}
      <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route exact path='/view_all_products'><AllProducts/></Route>
      <Route  path="/view_products/:id">

      <NewProducts/>
      </Route>
      <Route exact path='/cart'>
        <Cart/>
      </Route>

       {/* <AddProducts data={data}/> */}
       
    </Switch>

    </React.Fragment>
    
    
  );
}

export default App;
