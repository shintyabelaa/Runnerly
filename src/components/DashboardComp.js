import React, { useState } from 'react';
import { Card, Container, Button, Row, Col } from 'react-bootstrap';

const DashboardComp = () => {
  const [selectedClass, setSelectedClass] = useState('');

  const handleClassSelect = (selected) => {
    setSelectedClass(selected);
  };

  return (
    <Container>
      <h1>Dashboard</h1>
      <Row>
        <Col md={4}>
          <Card className={selectedClass === 'beginner' ? 'selected-card' : ''} style={{ marginTop: '50px' }}>
            <Card.Body>
              <Card.Title>Beginner Class</Card.Title>
              <Card.Text>{/* Add class details */}</Card.Text>
              <Button
                variant={selectedClass === 'beginner' ? 'primary' : 'outline-primary'}
                onClick={() => handleClassSelect('beginner')}
              >
                {selectedClass === 'beginner' ? 'Selected' : 'Select'}
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className={selectedClass === 'intermediate' ? 'selected-card' : ''} style={{ marginTop: '50px' }}>
            <Card.Body>
              <Card.Title>Intermediate Class</Card.Title>
              <Card.Text>{/* Add class details */}</Card.Text>
              <Button
                variant={selectedClass === 'intermediate' ? 'primary' : 'outline-primary'}
                onClick={() => handleClassSelect('intermediate')}
              >
                {selectedClass === 'intermediate' ? 'Selected' : 'Select'}
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className={selectedClass === 'advance' ? 'selected-card' : ''} style={{ marginTop: '50px' }}>
            <Card.Body>
              <Card.Title>Advance Class</Card.Title>
              <Card.Text>{/* Add class details */}</Card.Text>
              <Button
                variant={selectedClass === 'advance' ? 'primary' : 'outline-primary'}
                onClick={() => handleClassSelect('advance')}
              >
                {selectedClass === 'advance' ? 'Selected' : 'Select'}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Add margin top to push content below the footer */}
      <div style={{ marginTop: '80px' }}>
        {/* Your additional content */}
      </div>
    </Container>
  );
};

export default DashboardComp;
