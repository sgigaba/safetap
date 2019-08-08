var express = require("express");
var router = express.Router();
const Location = require("../models/Locations");
const Incidents = require("../models/Incidents");

const locations = [];

Location.find({}, function(err, doc){
  for(var i = 0; i < doc.length; i++){
    locations.push(doc[i].locationName);
  }
});



router.get('/', function(req, res, next) {
  var incidents = 0;

  // Incidents.create({locationName : "Bunting", date: "03 August 2019", officer : "Bill Cele", student: "Veronica Tyra" }, function(err, docu){
  // });

  Incidents.find({locationName : req.query.location}, function(err, doc){
    console.log(doc);
    incidents = doc.length;
    res.render('incidents', {currentLocation: req.query.location , Locations: locations, incidentsno: incidents});
  });
  
  if (req.query.date){
    console.log(req.query.date);

  }
});

module.exports = router;