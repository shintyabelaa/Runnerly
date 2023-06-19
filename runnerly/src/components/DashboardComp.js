import React, { useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { FaBolt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import beginnerImage from '../assets/img/cardlevel/beginner-class.jpg';
import intermediateImage from '../assets/img/cardlevel/intermediate-class.jpg';
import advanceImage from '../assets/img/cardlevel/advance-class.jpg';

const DashboardComp = () => {
  const [selectedClass, setSelectedClass] = useState('');

  const handleCardClick = (classType) => {
    setSelectedClass(classType);
  };

  return (
    <Container>
      <h1>Dashboard</h1>

      <Row>
        <Col md={4} sm={6} style={{ marginBottom: '-35px' }}>
          <Link to="/dashboard/user/beginner">
            <Card
              className={selectedClass === 'beginner' ? 'selected-card' : ''}
              style={{
                marginTop: '50px',
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                height: '60%',
              }}
              onClick={() => handleCardClick('beginner')}
            >
              <div
                className="card-image-overlay"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(to left , transparent, #FF6A13)',
                  opacity: 0.7,
                  zIndex: '2',
                }}
              />

              <Card.Img
                variant="top"
                src={beginnerImage}
                alt="Beginner Class"
                style={{ height: '100%', objectFit: 'cover' }}
              />

              <div
                className="card-text-overlay"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '25%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: '3',
                  textAlign: 'left',
                  padding: '10px',
                  color: 'white',
                  fontWeight: '700',
                  fontSize: '15px',
                }}
              >
                <p>Beginner Class</p>
                <div style={{ display: 'flex' }}>
                  <FaBolt color="yellow" size={16} />
                  <FaBolt color="yellow" size={16} />
                  <FaBolt color="yellow" size={16} />
                </div>
              </div>
            </Card>
          </Link>
        </Col>

        <Col md={4} sm={6} style={{ marginBottom: '-35px' }}>
          <Link to="/dashboard/user/intermediate">
            <Card
              className={selectedClass === 'intermediate' ? 'selected-card' : ''}
              style={{
                marginTop: '50px',
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                height: '60%',
              }}
              onClick={() => handleCardClick('intermediate')}
            >
              <div
                className="card-image-overlay"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(to left, transparent, #FF6A13)',
                  opacity: 0.7,
                  zIndex: '2',
                }}
              />

              <Card.Img
                variant="top"
                src={intermediateImage}
                alt="Intermediate Class"
                style={{ height: '100%', objectFit: 'cover' }}
              />

              <div
                className="card-text-overlay"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '30%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: '3',
                  textAlign: 'left',
                  padding: '10px',
                  color: 'white',
                  fontWeight: '700',
                  fontSize: '15px',
                }}
              >
                <p>Intermediate Class</p>
                <div style={{ display: 'flex' }}>
                  <FaBolt color="yellow" size={16} />
                  <FaBolt color="yellow" size={16} />
                  <FaBolt color="yellow" size={16} />
                </div>
              </div>
            </Card>
          </Link>
        </Col>

        <Col md={4} sm={6} style={{ marginBottom: '-35px' }}>
          <Link to="/dashboard/user/advance">
            <Card
              className={selectedClass === 'advance' ? 'selected-card' : ''}
              style={{
                marginTop: '50px',
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                height: '60%',
              }}
              onClick={() => handleCardClick('advance')}
            >
              <div
                className="card-image-overlay"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(to left, transparent, #FF6A13)',
                  opacity: 0.7,
                  zIndex: '2',
                }}
              />

              <Card.Img
                variant="top"
                src={advanceImage}
                alt="Advance Class"
                style={{ height: '100%', objectFit: 'cover' }}
              />

              <div
                className="card-text-overlay"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '25%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: '3',
                  textAlign: 'left',
                  padding: '10px',
                  color: 'white',
                  fontWeight: '700',
                  fontSize: '15px',
                }}
              >
                <p>Advance Class</p>
                <div style={{ display: 'flex' }}>
                  <FaBolt color="yellow" size={16} />
                  <FaBolt color="yellow" size={16} />
                  <FaBolt color="yellow" size={16} />
                </div>
              </div>
            </Card>
          </Link>
        </Col>
      </Row>

      <div style={{ marginTop: '80px' }}>{/* Your additional content */}</div>
    </Container>
  );
};

export default DashboardComp;
