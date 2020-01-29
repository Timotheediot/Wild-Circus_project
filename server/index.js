const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const port = 8000;

const connection = require('./config/config');

connection.connect((err) => {
    if (err) {
      return console.error('error:' + err.message);
    }
    console.log("Connected to the MySQL server.");
  });

//---------On définit la route Hello---------
app.get('/hello', (req, res) => {
    res.json("Hello World")
})

//---------Body Parser---------
const urlencodedParser = bodyParser.urlencoded({
    extended: true
});
app.use(urlencodedParser);
app.use(bodyParser.json());

//---------Définition des CORS---------
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//------------------

app.listen(port, (err) => {
    if(err) {
        throw new Error('Something bad happened…')
    }
    console.log(`Server is listening on port ${port}`);
});


// écoute de l'url "/api/employees"

app.get('/api/employees', (req, res) => {

    // connection à la base de données, et sélection des employés
    connection.query('SELECT * from employee', (err, results) => {
  
      if (err) {
        console.log(err);
        
        // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
        res.status(500).send('Erreur lors de la récupération des employés');
      } else {
  
        // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
        res.json(results);
      }
    });
});