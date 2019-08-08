var express = require("express");
var router = express.Router();
const Location = require("../models/Locations");
const Incidents = require("../models/Incidents");

const locations = [];



router.get('/', function(req, res){
    Location.find({}, function(err, doc){
        for(var i = 0; i < doc.length; i++){
          locations.push(doc[i].locationName);
        }
      });

    res.render('locationsettings', {Locations: locations});

});

router.post('/', function(req, res){
    console.log("adding location");
    Location.find({locationName: req.body.locationName}, function(err, doc){
        if (doc.length > 0){
            console.log("exists");
            console.log(doc);
        }
        else{
            Location.create({locationName : req.body.locationName, latitude: req.body.latitude, longitude: req.body.longitude }, function(err, docu){
                if (err){
                    console.log(err);
                }
               console.log(docu);
            });
        }
    });
});

module.exports = router;