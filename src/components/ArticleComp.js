import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { articles as importedArticles } from '../data/articles';
import { Link, Route, Routes } from 'react-router-dom';
import ArticleDetailComp from './ArticleDetailComp';

const ArticleComp = () => {
  const [showAll, setShowAll] = useState(false);

  const handleArticleClick = (index) => {
    console.log('Artikel diklik!', importedArticles[index]);
  };

  const handleShowMore = () => {
    setShowAll(true);
  };

  const displayedArticles = showAll ? importedArticles : importedArticles.slice(0, 3);
  
  const truncateDescription = (description, maxLength) => {
    if (Array.isArray(description) && description.length > 0) {
      const truncatedParagraphs = description.slice(0, maxLength);
      return truncatedParagraphs.join('<br />');
    }
    return '';
  };

  return (
    <div className="container">
      <h2>Artikel</h2>
      <div className="row">
        {displayedArticles.map((article, index) => (
          <div className="col-md-4" key={index} onClick={() => handleArticleClick(index)}>
            <div className="card mb-4">
              <img src={article.image || 'https://via.placeholder.com/150'} alt={article.title} className="card-img-top" />
                <div className="card-body">
                  <Link to={`/article/${index}`}>
                    <h5 className="card-title">{article.title}</h5>
                  </Link>
                  {article.description && (
                    <p className="card-text" dangerouslySetInnerHTML={{ __html: truncateDescription(article.description, 4) }} />
                  )}
                </div>
              </div>
          </div>
        ))}
      </div>
      {!showAll && (
        <div className="text-center">
          <button style={{ backgroundColor: '#FF6A13', border: '2px solid #E7EAF4', borderRadius: '40px' }} className="btn btn-primary" onClick={handleShowMore}>Show More</button>
        </div>
      )}
      <Routes>
        <Route path="/article/:index" element={<ArticleDetailComp articles={importedArticles} />} />
      </Routes>
    </div>
  );
};

export default ArticleComp;
