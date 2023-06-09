import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../style/main.css'; // Sesuaikan jalur impor CSS dengan lokasi file
import testImage from '../assets/Videotutorial/test.png';

const HowItWorksComp = () => {
  return (
    <Container>
      <Row className="HowItWorksComp">
      <h2>How It Works?</h2>
        <Col md={6}>
          <div className="imageWrapper">
            <img src={testImage} alt="How It Works" />
          </div>
        </Col>
        <Col md={6}>
          <p>Penjelasan tentang cara kerjanya</p>
        </Col>
      </Row>
    </Container>
  );
}

export default HowItWorksComp;
