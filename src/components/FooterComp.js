import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RunnerlyLogo from '../assets/img/gallery/RunnerlyLogo.png';

const FooterComp = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col md={3}>
            <div className="footer-logo">
              <img src={RunnerlyLogo} alt="Logo" />
              <p>Elevate Your Running Experience</p> {/* Paragraf yang ditambahkan */}
            </div>
            <div className="footer-social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </Col>
          <Col md={3}>
            <h4 className="footer-contributors">Contributors</h4>
            <ul>
              <li><a href="https://www.linkedin.com/in/aditya-bani-isro">Aditya Bani Isro</a></li>
              <li><a href="https://www.linkedin.com/in/desak-m-shintya-belardin">Desak Made Shintya Belardin</a></li>
              <li><a href="https://www.linkedin.com/in/muhammad-luthfi-akmal">Muhammad Luthfi Akmal</a></li>
              <li><a href="https://www.linkedin.com/in/okta-ferilianty">Okta Ferilianty</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h4 className="footer-links">Links</h4>
            <ul>
              <li><a href="#">Jurnal</a></li>
              <li><a href="#">Project Brief</a></li>
              <li><a href="#">Repository Github</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h4 className="footer-stats">Tech Stacks</h4>
            <ul>
              <li>Stacks 1</li>
              <li>Stacks 2</li>
              <li>Stacks 3</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center">
            <div className="footer-bottom-text">
              <p>Copyright © Tim C23-M4076 2023 — Designed with creativity</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FooterComp;
