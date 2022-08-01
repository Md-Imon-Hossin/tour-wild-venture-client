import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

import "./Service.css";
import useAuth from '../../../hooks/useAuth';
const Service = (props) => {
    // console.log(props.service);
    const { _id, image, name, description } = props.service;


    return (
        <div className='service'>
            <Col>
                <Card className='mb-3 w-100 h-100 card'>
                    <Card.Img className="w-100" variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Link to={`/placeOrder/${_id}`}>
                            <Button variant="warning" >Buy Now</Button>
                        </Link>


                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Service;