import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from "../../../images/img9.jpg";
import banner2 from "../../../images/img122.png";
import banner3 from "../../../images/img3.jpg";
import "./Banner.css"

const Banner = () => {
    return (
        <div className='banner'>
<Carousel >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption className='text-dark'>
            <h3>A holiday you'll remember forever</h3>
            <p>A great varity of steep and gentle waterslides for all tastes. Fun guaranteed</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
          />
  
          <Carousel.Caption className='text-dark'>
            <h3>Discover a whole new world of fun</h3>
            <p>Thers's nothing more exciting than spending a whole day in our amazing waterpark</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner3}
            alt="Third slide"
          />
  
          <Carousel.Caption className='text-dark'> 
            <h3>A perfect weekend for kids and adults</h3>
            <p>
             We provide amazing experiences and create safe adventures for you at the same time.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </div>
        
    );
};

export default Banner;