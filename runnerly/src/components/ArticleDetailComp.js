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
          <div className="card-detail-img-container">
            <img
              src={article.image || 'https://via.placeholder.com/150'}
              alt={article.title}
              className="card-detail-img"
            />
          </div>
          <div className="card-detail-source">
            <h3>Source: {article.source}</h3>
          </div>
          <div className="card-detail-description">
            {article.description.map((paragraph, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ArticleDetailComp;
