var express = require('express');
var router = express.Router();

var users_dal = require ('../models/users_dal')
/* GET users listing. */
router.get('/', function(req, res) {
    users_dal.getAll(function(err, result){
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    });
});

module.exports = router;
