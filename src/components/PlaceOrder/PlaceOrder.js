import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useForm } from "react-hook-form";
import axios from 'axios';

const PlaceOrder = () => {
    const [service, setService] = useState({});
    const email = sessionStorage.getItem("email");
    const { id } = useParams();

    useEffect(() => {
        const url = `https://obscure-sierra-26455.herokuapp.com/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))

    }, [])

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        data.email = email;
        console.log(data);
        axios.post("https://obscure-sierra-26455.herokuapp.com/orders", data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('order successfully placed');

                }
            })
    };

    return (
        <div className='py-5'>
            <Container>
                <h2 className='mb-5'>Place Order</h2>
                <Row>
                    <Col lg={7}>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input defaultValue={service?.image} {...register("img", { required: true })} className="w-75" placeholder="Image Url" />
                            <br />
                            <br />

                            <input defaultValue={service?.name} {...register("name", { required: true })} placeholder="Name" className="w-75" />
                            <br />
                            <br />

                            <input defaultValue={email} {...register("email", { required: true })} placeholder="Email" className="w-75" />
                            <br />
                            <br />

                            <input {...register("address", { required: true })} placeholder="Address" className="w-75" />
                            <br />
                            <br />

                            <textarea defaultValue={service?.description} {...register("description", { required: true })} placeholder="Description" className="w-75" />

                            <br />
                            <br />

                            <input className='btn btn-warning' type="submit" />
                        </form>
                    </Col>

                    <Col lg={5}>
                        <Card className='border-0'>
                            <Card.Img variant="top" src={service?.image} />
                            <Card.Body>
                                <Card.Title>{service?.name}</Card.Title>
                                <Card.Text>
                                    {service?.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default PlaceOrder;