import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AboutUsComp = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='about'>
      <Container>
        <Row>
          <Col>
            <h2>About Us</h2>
            <p>
              Website yang mampu memberikan solusi digital dan mudah digunakan dengan memperhatikan user experience, serta dapat membantu pengguna dalam melacak dan memotivasi diri mereka untuk berolahraga secara teratur.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center align-items-center">
            <h2>Fitur</h2>
          </Col>
        </Row>
        <Row className="slider">
          <Col>
            <Slider {...sliderSettings}>
              <div className="box">
                <div className="circle">
                  <i className="fas fa-weight"></i>
                </div>
                <h3>Tracking Berat Badan</h3>
                <p>Dapat memantau berat badan idealmu</p>
              </div>
              <div className="box">
                <div className="circle">
                  <i className="fas fa-running"></i>
                </div>
                <h3>Tracking Lari</h3>
                <p>Dapat memantau jangkauan larimu</p>
              </div>
              <div className="box">
                <div className="circle">
                  <i className="fas fa-file"></i>
                </div>
                <h3>Report</h3>
                <p>Dapat memantau progress larimu</p>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutUsComp;
