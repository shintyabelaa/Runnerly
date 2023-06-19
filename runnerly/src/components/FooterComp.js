import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RunnerlyLogo from '../assets/img/gallery/RunnerlyLogo.png';

const FooterComp = () => {
  return (
    <div className="footer" style={{
      '@media (max-width: 768px)': { marginTop: '10px' }
    }}
  >
      <Container>
        <Row>
          <Col md={3}>
            <div className="footer-logo">
              <img src={RunnerlyLogo} alt="Logo" />
              <p>Elevate Your Running Experience</p> {/* Paragraf yang ditambahkan */}
            </div>
            <div className="footer-social-icons">
              <a href="https://github.com/shintyabelaa/Runnerly/tree/master" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.instagram.com/runnerly_/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </Col>
          <Col md={3}>
            <h4 className="footer-contributors">Contributors</h4>
            <ul>
              <li><a href="https://www.linkedin.com/in/aditya-bani-isro-870255222">Aditya Bani Isro</a></li>
              <li><a href="https://www.linkedin.com/in/desak-made-shintya-belardin-54a451150">Desak Made Shintya Belardin</a></li>
              <li><a href="https://www.linkedin.com/in/muhammad-luthfi-akmal-6ab992279">Muhammad Luthfi Akmal</a></li>
              <li><a href="https://www.linkedin.com/in/oktaferilianty/">Okta Ferilianty</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h4 className="footer-links">Links</h4>
            <ul>
              <li><a href="https://youtu.be/-HTyRDTykRA">Link Video</a></li>
              <li><a href="https://docs.google.com/document/d/119ICco8F1rxlc_8OFWPT4DtVG6rzr_Xu7NGXdwgVpAY/edit?pli=1">Project Brief</a></li>
              <li><a href="https://github.com/shintyabelaa/Runnerly/tree/master">Repository Github</a></li>
              <li><a href="https://www.canva.com/design/DAFmK7wFoEY/Ozjk_HlB3ardbWNNt4OmPQ/edit">Presentation</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h4 className="footer-stats">Tech Stacks</h4>
            <ul>
              <li>React</li>
              <li>Firebase</li>
              <li>G-Maps API</li>
              <li>Bootstrap</li>
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
