import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
const HeroComp = () => {
  return (
    <div className='hero min-vh-100'>
        <Container>
            <Row>
                <Col className='text-white '>
                <h1 className='texthero'>Elevate Your Running Experience</h1>
                <Link to="/signup" style={{ textDecoration: 'none' }}>
  <button variant="primary" className="herobutton">Sign Up</button>
</Link>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default HeroComp