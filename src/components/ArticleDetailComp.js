import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ArticleDetailComp = ({ article }) => {
  const handleClick = () => {
    console.log('Berita diklik!');
  };

  if (!article) {
    return <div></div>;
  }

  return (
    <Container>
      <Row>
        <Col md={8} className="offset-md-2" onClick={handleClick}>
          <h2>{article.title}</h2>
          <img src={article.urlToImage || 'https://via.placeholder.com/150'} alt={article.title} />
          <p>{article.description}</p>
          <p>{article.content}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ArticleDetailComp;
