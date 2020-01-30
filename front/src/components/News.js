import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './News.css'
import NewsCard from './NewsCard';

const News = () => {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    axios.get('http:/localhost:8000/photobyarticle')
    .then(res=> {
      console.log(res);
      setArticles(res.data)
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <div className='container mx-auto'>
      <div className='row'>
        {articles && articles.map((article) => {
          return( <NewsCard article={article} />)
        }
        )}
      </div>
    </div>
  );
}

export default News;