const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8000;
const connection = require('./config/config');

app.use(require('./routes'));


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
app.use( (req, res, next) => {
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


