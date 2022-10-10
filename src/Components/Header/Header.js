import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Header.css'

const Header = () => {
    return (
        
        <Carousel className='my-3'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/header/23054.jpg"
            alt="First slide"
          />
          <Carousel.Caption className='text_back_blurr'>
            <h3 >Test Your Skills</h3>
            <p>See The Depth of Your Skill</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/header/download.png"
            alt="Second slide"
          />
  
          <Carousel.Caption className='text_back_blurr' id='white'>
            <h3>Judge The Depth</h3>
            <p>Find how deep you know about the topics</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/header/Web-development-tools.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption className='text_back_blurr'>
            <h3>Build Confidence</h3>
            <p>
              Build Confidence for any interview.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Header;