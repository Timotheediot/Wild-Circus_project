import React from 'react';
import axios from 'axios';
import './NewsCard.css'


const NewsCard = ({ article }) => {
console.log('image',article);

  return (
    <div>
      <div className="card NewsCard">
        <img className="card-img-top imgCard" src={article.url} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{article.article_name}</h5>
          <p className="card-text">{article.description.substr(0, 201)}…</p>
          <a href="..." className="btn btn-success">Lire la suite</a>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;