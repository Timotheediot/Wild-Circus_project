const express = require('express');
const router = express.Router();
const connection = require('../../config/config');


// écoute de l'url "/article/…"

router.get('/', (req, res) => {

    connection.query('SELECT * from article', (err, results) => {
  
      if (err) {
        console.log(err);
        res.status(500).send('Erreur lors de la récupération des articles');
      } else {
        res.json(results);
      }
    });
});

router.get('/:id', (req, res) => {
    connection.query(`SELECT * FROM article WHERE id = ${req.params.id}`, (err, results) => {
  
      if (err) {
        console.log(err);
        res.status(500).send(`Erreur lors de la récupération de l'article par l'id`);
      } else {
        res.json(results);
      }
    });
});

router.get('/articlebycat/:id', (req, res) => {
    connection.query(`SELECT article_name, date, description, c.cat_name, c.id  FROM article JOIN categorie as c ON c.id=id_categorie WHERE id_categorie=${req.params.id} ORDER BY date ASC`, (err, results) => {
  
      if (err) {
        console.log(err);
        res.status(500).send(`Erreur lors de la récupération de l'article par l'id`);
      } else {
        res.json(results);
      }
    });
});


module.exports = router;