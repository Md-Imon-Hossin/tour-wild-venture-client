import React, { useEffect, useState } from 'react';
import MyOrder from '../MyOrder/MyOrder';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const MyOrders = () => {
    const email = sessionStorage.getItem("email");
    const [orders, setorders] = useState([]);
    
    useEffect(() => {
        fetch(`https://obscure-sierra-26455.herokuapp.com/orders/${email}`)
            .then(res => res.json())
            .then(data => setorders(data));
    }, [])

    // delete an user
    const handleDeleteUser = id => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if(proceed){
        const url = `https://obscure-sierra-26455.herokuapp.com/orders/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert("Deleted Successfully");
                    const remainingUsers = orders.filter(order=> order._id !== id)
                    setorders(remainingUsers);

                }
            })
    }

    }

    return (
        <div className='py-4'>
            <h2 className='mb-4'>My Orders: {orders.length} </h2>
            <Container>
                <Row xs={1} md={2} lg={3} className="g-4">

                    {
                        orders.map(order => <div key={order._id}>
                            <Col>
                                <Card className='mb-3'>
                                    <Card.Img variant="top" src={order?.img} />
                                    <Card.Body>
                                        <Card.Title>{order?.name}</Card.Title>
                                        <Card.Text>
                                            {order?.description}
                                        </Card.Text>
                                        <Button
                                            onClick={() => handleDeleteUser(order?._id)}
                                            variant="danger">Delete</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </div>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default MyOrders;