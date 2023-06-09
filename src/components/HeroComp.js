import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const HeroComp = () => {
  return (
    <div className='hero min-vh-100'>
        <Container>
            <Row>
                <Col className='text-white '>
                <h1 className='texthero'>Elevate Your Running Experience</h1>
                <button variant='primary'className='herobutton'>Sign Up</button>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default HeroComp