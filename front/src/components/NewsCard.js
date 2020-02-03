import React from 'react';
import './NewsCard.css'


const NewsCard = ({ article }) => {

  return (
    <div>
      <div className="card NewsCard mr-4">
        <img className="card-img-top imgCard" src={article.url} alt=" circus" />
        <div className="card-body">
          <h5 className="card-title">{article.article_name}</h5>
          <p className="card-text">{article.description}…</p>
          <a href="..." className="btn btn-success">Lire la suite</a>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;