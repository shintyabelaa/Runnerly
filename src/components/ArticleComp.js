import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ArticleComp = () => {
  const [articles, setArticles] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await fetch('https://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=693021c1f51e435096520b11f340e629');
      const data = await response.json();
      if (data.articles) {
        setArticles(data.articles);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleArticleClick = (index) => {
    console.log('Artikel diklik!', articles[index]);
  };

  const handleShowMore = () => {
    setShowAll(true);
  };

  const displayedArticles = showAll ? articles : articles.slice(0, 3);

  return (
    <div className="container">
      <h2>Artikel</h2>
      <div className="row">
        {displayedArticles.map((article, index) => (
          <div className="col-md-4" key={index} onClick={() => handleArticleClick(index)}>
            <div className="card mb-4">
              <img src={article.urlToImage || 'https://via.placeholder.com/150'} alt={article.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                {article.description && article.description.map((paragraph, pIndex) => (
                  <p className="card-text" key={pIndex}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {!showAll && (
        <div className="text-center">
          <button className="btn btn-primary" onClick={handleShowMore}>Show More</button>
        </div>
      )}
    </div>
  );
};

export default ArticleComp;
