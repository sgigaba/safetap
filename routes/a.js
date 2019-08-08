var express = require('express');
var router = express.Router();

router.post('/a', function(req, res) {
    console.log("I'm here");
  });
  
module.exports = router;