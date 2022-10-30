import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import FoodDetails from './components/FoodDetails/FoodDetails';
import Foods from './components/Foods/Foods';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HeaderImage from './components/HeaderImage/HeaderImage';
import Review from './components/Review/Review';
import Shipment from './components/Shipment/Shipment'
import Search  from './components/Search/Search';

function App() {

  const [cart, setCart] = useState([])

   const cartHandler =(currentFood)=>{
    const alreadyAdded =cart.find(fd=> fd.id === currentFood.id)
    if(!alreadyAdded){
      let newCart = [...cart, currentFood] 
      setCart(newCart)
    }
    else{
      const remainingCarts = cart.filter(fd=> fd.id !== currentFood.id)
      setCart(remainingCarts)
    }
  }





  return (
    <div>
        <Header cart={cart}></Header>
        <HeaderImage></HeaderImage>

        <Routes>
          <Route path='/' element={<Foods cart={cart}></Foods>} ></Route>
          <Route path='/home' element={<Foods cart={cart}></Foods>}></Route>
          <Route path='food/:foodId' element={<FoodDetails cartHandler={cartHandler}></FoodDetails>}></Route>
          <Route path='home/food/:foodId' element={<FoodDetails cartHandler={cartHandler}></FoodDetails>}></Route>
          <Route path='/orderreview' element={<Review cart={cart}></Review>}></Route>
          <Route path='/shipment' element={<Shipment cart={cart}></Shipment>}></Route>
          <Route path='/search=:searchQuery' element={<Search></Search>}></Route>
        </Routes>
      <Blog></Blog>
    <Footer></Footer>

    </div>
  );
}

export default App;
