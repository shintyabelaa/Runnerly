import React, { useState } from 'react';
import { Card, Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { FaWeight, FaRunning, FaFile } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import userImage from '../assets/img/page/userpage.jpg';

const DashboardUserComp = ({ level }) => {
  const [weightProgress, setWeightProgress] = useState(0);
  const [distanceProgress, setDistanceProgress] = useState(0);
  const [selectedLevel, setSelectedLevel] = useState('');

  const handleCardClick = (level) => {
    setSelectedLevel(level);
  };

  const renderGreetingMessage = () => {
    let greetingTitle = 'Selamat Datang di level ';
    let greetingText = 'Silakan pilih level Anda.';

    if (level === 'beginner') {
      greetingTitle = 'Selamat Datang di level Beginner';
      greetingText = 'Ayo lakukan progressmu.';
    } else if (level === 'intermediate') {
      greetingTitle = 'Selamat Datang di level Intermediate';
      greetingText = 'Ayo lakukan progressmu.';
    } else if (level === 'advance') {
      greetingTitle = 'Selamat Datang di level Advance';
      greetingText = 'Ayo lakukan progressmu.';
    }

    return (
      <>
        <Card.Title style={{ marginTop: '10px', fontSize: '18px', color: 'white' }}>{greetingTitle}</Card.Title>
        <Card.Text style={{ fontSize: '14px', color: 'white' }}>{greetingText}</Card.Text>
      </>
    );
  };

  return (
    <Container>
      <h1>Dashboard</h1>

      <Row>
      <Col md={6}>
  <Card
    style={{
      marginTop: '50px',
      width: '100%',
      height: 'auto',
      maxWidth: '700px', // Atur lebar maksimum sesuai kebutuhan Anda
      position: 'relative',
    }}
  >
    <div
      style={{
        position: 'relative',
        height: '100px', // Sesuaikan tinggi gambar dengan kebutuhan Anda
        borderRadius: '7px',
        overflow: 'hidden',
      }}
    >
      <Card.Img
        variant="top"
        src={userImage}
        alt="User"
        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '7px' }}
      />
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          borderRadius: '7px',
          background: 'linear-gradient(to left , transparent, #FF6A13)',
          opacity: 0.7,
        }}
      />

              <Card.Body
                className="position-absolute top-0 start-0"
                style={{ textAlign: 'center', left: '0', right: '0', margin: 'auto' }}
              >
                {renderGreetingMessage()}
              </Card.Body>
            </div>
          </Card>

          <Row>
            <Col>
              <Link to={`/beratbadan/${level}`} style={{ textDecoration: 'none' }}>
                <Card
                  style={{ marginTop: '50px', width: '100%', height: '100px' }}
                  onClick={() => handleCardClick('Beginner')}
                >
                  <Card.Body>
                    <div className="circle">
                      <FaWeight className="icon" />
                    </div>
                    <Card.Title style={{ marginTop: '10px', fontSize: '20px',textAlign:'center' }}>Tracking Berat Badan</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col>
              <Link to={`/jaraklari/${level}`} style={{ textDecoration: 'none' }}>
                <Card
                  style={{ marginTop: '50px', width: '100%', height: '100px' }}
                  onClick={() => handleCardClick('Intermediate')}
                >
                  <Card.Body>
                    <div className="circle">
                      <FaRunning className="icon" />
                    </div>
                    <Card.Title style={{ marginTop: '10px', fontSize: '20px' , textAlign:'center'}}>Tracking Jarak Lari</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
        </Col>
        <Col md={6}>
  <Link to={`/report/${level}`} style={{ textDecoration: 'none' }}>
    <Card style={{ marginTop: '50px', width: '100%', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card.Body>
        <Card.Title style={{ textAlign: 'center', marginTop: '120px', fontSize: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <FaFile style={{ fontSize: '120px', marginBottom: '5px', color:'#F7F7FF'}} />
          <span>Report</span>
        </Card.Title>
      </Card.Body>
    </Card>
          </Link>
        </Col>
      </Row>

      <div style={{ marginTop: '80px' }}>{/* Konten tambahan Anda */}</div>
    </Container>
  );
};

export default DashboardUserComp;
