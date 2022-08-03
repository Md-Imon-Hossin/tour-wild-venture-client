import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import "./Services.css";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://obscure-sierra-26455.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='py-4'>
            <h2 className='mb-5 text-warning'>Our Services  </h2>
            <Container>
                {
                    services?.length === 0 ? <div className='text-center'>
                        <Spinner animation="border" variant="dark" className='mb-3' />
                    </div>
                        :
                        <Row xs={1} md={2} lg={3} className="g-4">

                            {
                                services.map(service => <Service
                                    key={service._id}
                                    service={service}
                                ></Service>)
                            }

                        </Row>
                }
            </Container>
        </div>
    );
};

export default Services;