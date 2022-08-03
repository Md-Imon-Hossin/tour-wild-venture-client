import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./Gallary.css";
import gallary1 from "../../../images/img1.jpg"
import gallary2 from "../../../images/img13.jpg"
import gallary3 from "../../../images/img6.jpg"
import gallary4 from "../../../images/img4.jpg"
import gallary5 from "../../../images/img10.jpg"
import gallary6 from "../../../images/img14.jpg"
import gallary7 from "../../../images/img5.jpg"
import gallary8 from "../../../images/img15.jpg"
import gallary9 from "../../../images/img11.jpg"

const Gallary = () => {
    return (
        <div className='py-4'>
            <h2 className='mb-5 text-warning'>Our Gallary</h2>
            <Container>
                <Row>
                    <Col lg={4}>
                        <img className='w-100 mb-3' src={gallary1} alt="" />
                        <img className='w-100 mb-3' src={gallary2} alt="" />
                        <img className='w-100 mb-3' src={gallary3} alt="" />

                    </Col>

                    <Col lg={4}>

                        <img className='w-100 mb-3' src={gallary4} alt="" />
                        <img className='w-100 mb-3' src={gallary5} alt="" />
                        <img className='w-100 mb-3' src={gallary6} alt="" />
                    </Col>

                    <Col lg={4}>
                        <img className='w-100 mb-3' src={gallary7} alt="" />
                        <img className='w-100 mb-3' src={gallary8} alt="" />
                        <img className='w-100 mb-3' src={gallary9} alt="" />
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Gallary;