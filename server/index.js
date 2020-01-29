const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 8000;

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