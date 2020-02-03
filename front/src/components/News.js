import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './News.css'
import NewsCard from './NewsCard';

const News = () => {

const [articles, setArticles] = useState([])
const [articlesByCategorie, setArticlesByCategorie] = useState([])
const getArticles = async () => {
  const result = await
    axios.get('http://localhost:8000/article')
        setArticles(result.data)
        setArticlesByCategorie(result.data)
}  

useEffect(() => {
  getArticles()
},[])


  
  const articlebyCat = (e) => {
    if(e.target.value === "Tous") {
      return setArticlesByCategorie(articles)
    }
    const articlesByCat = articles.filter(catArticle => catArticle.cat_name === e.target.value)
    setArticlesByCategorie(articlesByCat)
  }

  const [categories, setCategories] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/article/categorie')
      .then(res => {
        console.log(res);
        setCategories(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, []);


  return (
    <div className='container mx-auto'>
        <label className='text-secondary mt-3'>Sélectionnez une catégorie</label>

      <select className="browser-default custom-select mb-5 " onChange={(e)=>articlebyCat(e)} >
        {categories && categories.map(categorie => {
          return (<option value={categorie.cat_name}>{categorie.cat_name}</option>)
        })}
      </select>

      <div className='row'>
        {articlesByCategorie && articlesByCategorie.map((article) => {
          return (<NewsCard article={article} />)
        }
        )}
      </div>
    </div>
  );
}

export default News;