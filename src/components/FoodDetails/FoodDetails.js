import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Figure, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import allFoods from '../../fakeData/index'

const FoodDetails = (props) => {
    const {foodId} = useParams()
    
    const [foods, setFoods] = useState([])
    
    useEffect(()=>{
        setFoods(allFoods)
    },[foods])
    const currentFood = foods.find(food=> food.id === foodId)

    return (
        <div>
            <Container>
                <Row className='my-2'>
                    <Col sm={7} className='my-5'>
                    <Card style={{ width: '40rem', height: '23rem' }}>
                    
                    <Card.Body>
                    <Card.Title><h1>{currentFood?.name}</h1></Card.Title>
                    <Card.Text>{currentFood?.story}</Card.Text>
                        ${currentFood.price}
                    <Button variant="primary">Add To Cart</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col  sm={5}>
                    <Figure.Image width={600}  alt="171x180" src={currentFood?.img}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FoodDetails;