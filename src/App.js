import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import FoodDetails from './components/FoodDetails/FoodDetails';
import Foods from './components/Foods/Foods';
import Header from './components/Header/Header';
import HeaderImage from './components/HeaderImage/HeaderImage';


function App() {


  const [cart, setCart] = useState([])

  const cartHandler =(currentFood)=>{
    console.log(currentFood)
  }





  return (
    <div>
        <Header></Header>
        {/* <HeaderImage></HeaderImage> */}

        <Routes>
          <Route path='/' element={<Foods></Foods>} ></Route>
          <Route path='/home' element={<Foods></Foods>}></Route>
          <Route path='food/:foodId' element={<FoodDetails cartHandler={cartHandler}></FoodDetails>}></Route>
          <Route path='home/food/:foodId' element={<FoodDetails cartHandler={cartHandler}></FoodDetails>}></Route>
        </Routes>
    </div>
  );
}

export default App;
