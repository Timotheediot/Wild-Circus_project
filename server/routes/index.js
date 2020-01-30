const express = require('express');
const router = express.Router();
const article = require('./article/Article');
const categorie = require('./categorie/Categorie')

router.use('/article', article )
router.use('/categorie', categorie)

router.get('/test', (req, res) => {
    res.send('Test route')
});


module.exports = router;