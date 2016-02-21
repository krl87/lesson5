var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Get about page

router.get('/about', function(req, res, next){
  //show the about page
  res.render('about', {
    myName: "Kayley",
    month: "February",
    title: "About"
      }
  );
});
//get random page

router.get('/random', function(req, res, next) {
  //calculates a random number and passes it to the view called random
  res.render('random', {random: Math.random(),

              title: "Random"});
});

//make this file public within the rest of the application
module.exports = router;
