var express = require('express');
var router = express.Router();

const User = require("../models/User");
const Location = require("../models/Locations");
const Incidents = require("../models/Incidents");

var locations = [];
Location.find({}, function(err, doc){
  // console.log(doc);
  for(var i = 0; i < doc.length; i++){
    locations.push(doc[i].locationName);
  }
});


/* GET home page. */
router.get('/', function(req, res, next) {
  
  // Location.find({}, function(err, doc){
  //   // console.log(doc);
  //   for(var i = 0; i < doc.length; i++){
  //     locations.push(doc[i].locationName);
  //   }
  // });
  res.render('index', { title: 'Express', Locations: locations });
});

router.get('/guards', function(req, res){

  res.render('guards', {currentLocation: req.query.location , Locations: locations});
});


router.get('/students', function(req, res){

  res.render('students', {currentLocation: req.query.location , Locations: locations});
});

router.get('/activities', function(req, res, next) {


//  locations = ["Braamfontein"];

  Location.find({locationName: req.query.location}, function(err, doc){
    var latitude = doc[0].latitude;
    var longitude = doc[0].longitude;

    res.render('activities', { currentLocation: req.query.location , Locations: locations, latitude: latitude, longitude: longitude });
   
  });
  



});

// router.get('/incidents', function(req, res){
//   var incidents = 0;

//   // Incidents.create({locationName : "Bunting", date: "03 August 2019", officer : "Bill Cele", student: "Veronica Tyra" }, function(err, docu){
//   // });

//   Incidents.find({locationName : req.query.location}, function(err, doc){
//     console.log("incidents");
//     incidents = doc.length;
//     res.render('incidents', {currentLocation: req.query.location , Locations: locations, incidentsno: incidents});
//   });
  
//   if (req.query.date){
//     console.log(req.query.date);

//   }

// });

router.get('/api', function(req, res, next) {
  console.log(req.query);
  var newUser = new User({
    studentId: 1234,
    firstname: req.query.name
  })


  newUser.save(function(err, user) {
    console.log(user);
    User.find({}, function (err, doc) {
      if (err)
        throw err;
      console.log(doc);
      res.render('index', { title: user.firstname });
    })
  })
});


router.post('/incidents', function(req, res){

  res.render('incidents', { currentLocation: req.query.location , Locations: locations});

  console.log("got the post");
});


module.exports = router;