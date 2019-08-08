const mongoose = require('mongoose');
// Location Schema
const LocationsSchema = mongoose.Schema({
	locationName : {
        type: String,
        required: true
    },
    latitude : {
        type: Number,
        required: true
    },
    longitude : {
        type: Number,
        required: true
    }
});

const Locations = module.exports = mongoose.model('locations', LocationsSchema);