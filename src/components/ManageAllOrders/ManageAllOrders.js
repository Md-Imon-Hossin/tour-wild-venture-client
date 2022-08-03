import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import  Spinner from 'react-bootstrap/Spinner';


const ManageAllOrders = () => {
    const [manageOrders, setManageOrders] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/allOrders")
        .then(res=> res.json())
        .then(data=> setManageOrders(data))
    },[])
    return (
        <div className='py-4'>
            <h2  className='mb-4'>Manage All Orders : {manageOrders.length}</h2>
            <Container>
                {
                     manageOrders?.length === 0 ?   <div className='text-center'>
                     <Spinner animation="border" variant="dark" className='mb-3' />
                    </div>
                     : 
                    <Row xs={1} md={2} lg={3} className="g-4">

                    {
                        manageOrders.map(manageOrder => <div key={manageOrder._id}>
                            <Col>
                                <Card className='mb-3'>
                                    <Card.Img variant="top" src={manageOrder?.img} />
                                    <Card.Body>
                                        <Card.Title>{manageOrder?.name}</Card.Title>
                                        <Card.Text>
                                            {manageOrder?.description}
                                        </Card.Text>
                                        {/* <Button
                                            onClick={() => handleDeleteUser(order?._id)}
                                            variant="danger">Delete</Button> */}
                                    </Card.Body>
                                </Card>
                            </Col>
                        </div>)
                    }
                </Row>
                }
            </Container>
        </div>
    );
};

export default ManageAllOrders;