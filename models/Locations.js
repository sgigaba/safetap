const mongoose = require('mongoose');
// Location Schema
const LocationsSchema = mongoose.Schema({
	locationName : {
        type: String,
        required: true
    },
    geoLocation : {
        type: Number,
        required: true

    }
});

const Locations = module.exports = mongoose.model('Locations', LocationsSchema);