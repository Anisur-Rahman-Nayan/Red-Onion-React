import { faCartArrowDown, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Figure, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import allFoods from '../../fakeData/index'
import suggestionFood from '../../fakeData/suggestionFood'
import RecommendFood from '../RecommendFood/RecommendFood';
import './FoodDetails.css'
const FoodDetails = (props) => {
    const {foodId} = useParams()
    
    const [foods, setFoods] = useState([])
    
    useEffect(()=>{
        setFoods(allFoods)
    },[foods])
    let currentFood = foods.find(food=> food.id === foodId)

    const [suggestFood, setSuggestFood] = useState([])
    useEffect(()=>{
        const suggestFoodSlice = suggestionFood.slice(0,3)
        setSuggestFood(suggestFoodSlice)
    },[])


    const [quantity, setQuantity]= useState(1)

    const [isSuccess, setIsSuccess] = useState(false);

    
    const finalCartHandler =(currentFood)=>{
        currentFood.quantity = quantity;
        // console.log(currentFood)
        props?.cartHandler(currentFood)
        setIsSuccess(true)
    }


    
    if (isSuccess) {
        setTimeout(() => setIsSuccess(false), 1500);
    }

    return (
        <div>
            <Container>
                <Row className='my-2'>
                    <Col sm={7} className='my-5'>
                    <Card style={{ width: '40rem', height: '21rem' }}>
                    
                    <Card.Body>
                    <Card.Title><h1>{currentFood?.name}</h1></Card.Title>
                    <Card.Text>{currentFood?.story}</Card.Text>
                    
                        {/* button */}


                    <div className='d-flex my-4'>
                        <h2 className='price'>${currentFood?.price}</h2>

                        <div className='cart-controller ml-3 btn'>
                            
                            <button className='btn' onClick={() => setQuantity(quantity <= 1 ? 1 : quantity - 1)}>➖</button>
                            
                            {
                            quantity
                            }
                            
                            <button className='btn' onClick={() => setQuantity(quantity + 1)}>➕</button>
                        </div>
                    </div>


    <div className="action d-flex align-items-center">
        <button className='btn btn-danger btn-rounded mb-2' onClick={() => finalCartHandler(currentFood)}><FontAwesomeIcon icon={faCartArrowDown} /><span>  Add</span></button>
                
                {isSuccess && 
                    <p className="ml-3 success-mgs text-success"><FontAwesomeIcon icon={faCheckCircle}/>  Item added to Cart</p>
                }
                    </div>



                    </Card.Body>
                    </Card>
                    </Col>
                    <Col  sm={5}>
                    <Figure.Image width={600}  alt="171x180" src={currentFood?.img}/>
                    </Col>
                </Row>
                <div className='d-flex'>
        {
            suggestFood.map(recommendFood=> <RecommendFood recommendFood={recommendFood} key={recommendFood.id}></RecommendFood>)
        }
                </div>
            </Container>
        </div>
    );
};

export default FoodDetails;