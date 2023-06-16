import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { articles as importedArticles } from '../data/articles';


const ArticleDetailComp = () => {
  const { index } = useParams();
  const article = importedArticles[index];


  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Row>
        <Col md={8} className="offset-md-2">
          <h2 className="card-detail-title">{article.title}</h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin:'0 auto', width: '800px', height: '400px', borderRadius: '20px', filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }} >
            <img src={article.image || 'https://via.placeholder.com/150'} alt={article.title} className="card-detail-img"/>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
          <h3 style={{ fontSize: '16px' }} className="card-detail-source">Source : {article.source}</h3>
          </div>
          <div style={{ textAlign: 'justify', margin: '10px 0 50px 0' }}>
            {article.description.map((paragraph, index) => (
              <p key={index} className="card-detail-description">
                <span dangerouslySetInnerHTML={{ __html: paragraph }} />
                <br />
              </p>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ArticleDetailComp;
