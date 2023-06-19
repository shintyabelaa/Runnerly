import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../style/main.css'; // Sesuaikan jalur impor CSS dengan lokasi file
import testVideo from '../assets/Videotutorial/test.mp4';

const HowItWorksComp = () => {
  return (
    <Container>
      <Row className="HowItWorksComp">
        <h2>How It Works?</h2>
        <Col md={6}>
          <div className="videoWrapper">
            <video src={testVideo} autoPlay loop muted playsInline style={{ width: '50%' }}>
              Sorry, your browser doesn't support embedded videos.
            </video>
          </div>
        </Col>
        <Col md={6}>
          <p>Buat akunmu terlebih dahulu, lalu pilih kelas mana yang ingin diikuti. Isi berat badan dan tentukan arah tujuan larimu dan dapatkan informasi kalori dan grafik reportnya.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default HowItWorksComp;
