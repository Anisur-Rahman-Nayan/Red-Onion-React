import React, { useEffect, useState } from 'react';
import allFoods from '../../fakeData/index'
import FoodItems from '../FoodItems/FoodItems';
import './Foods.css'
const Foods = () => {

        const [foods, setFoods] = useState([])
        const [selectedFoodType, setSelectedFoodType] = useState('lunch')
        const [selectedFastFoodType, setSelectedFastFoodType] = useState('pizza')

        useEffect(()=>{
            setFoods(allFoods)
        },[])

        const selectedFoods = foods.filter(food => food.category === selectedFoodType)
        const selectedFastFood = foods.filter(food=> food.category === selectedFastFoodType)

    return (
        
        <section className='food-area my-5'>
            <div className='container'>
                <nav>
                    <ul className='nav justify-content-center'>
                        <li onClick={()=> setSelectedFoodType('breakfast')} >
                            <span className={selectedFoodType ==='breakfast' ? 'active nav-link': 'nav-link'}>Breakfast</span>
                        </li>
                        <li onClick={()=> setSelectedFoodType('lunch')}>
                            <span className={selectedFoodType === 'lunch' ? 'active nav-link' : 'nav-link'}>Lunch</span>
                        </li>
                        <li onClick={()=> setSelectedFoodType('dinner')}>
                            <span className={selectedFoodType === 'dinner' ? 'active nav-link' : 'nav-link'}>Dinner</span>
                        </li>
                    </ul>
                </nav>

                <div>
                    {
                        selectedFoods.map(food=> <FoodItems food={food} key={food.id}></FoodItems>)
                    }
                </div>

                <nav>
                    <ul className='nav justify-content-center'>
                        <li onClick={()=>setSelectedFastFoodType('burger')}>
                            <span className={selectedFastFoodType === 'burger' ? 'active nav-link' : 'nav-link'}>Burger</span>
                        </li>
                        <li onClick={()=>setSelectedFastFoodType('shawarma')}>
                            <span className={selectedFastFoodType === 'shawarma' ? 'active nav-link' : 'nav-link'}>Shawarma</span>
                        </li>
                        <li onClick={()=>setSelectedFastFoodType('pizza')}>
                            <span className={selectedFastFoodType === 'pizza' ? 'active nav-link' : 'nav-link'}>Pizza</span>
                        </li>
                        <li onClick={()=>setSelectedFastFoodType('sandwich')}>
                            <span className={selectedFastFoodType === 'sandwich' ? 'active nav-link' : 'nav-link'}>Sandwich</span>
                        </li>
                        <li onClick={()=>setSelectedFastFoodType('icecream')}>
                            <span className={selectedFastFoodType === 'icecream' ? 'active nav-link' : 'nav-link'}>Ice Cream</span>
                        </li>
                        <li onClick={()=>setSelectedFastFoodType('drinks')}>
                            <span className={selectedFastFoodType === 'drinks' ? 'active nav-link' : 'nav-link'}>Drinks</span>
                        </li>
                        
                    </ul>
                </nav>

                <div>
                {
                    selectedFastFood.map(food=> <FoodItems food={food} key={food.id}></FoodItems>)
                }
                </div>

            </div>

        </section>
        
    );
};

export default Foods;