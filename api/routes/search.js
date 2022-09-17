var express = require('express');
var router = express.Router();

/* GET search */
router.get('/', function(req, res, next){
    console.log('search route')
    res.send('respond from search')
});

module.exports = router;