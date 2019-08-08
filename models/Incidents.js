const mongoose = require('mongoose');
// Incidents Schema
const IncidentsSchema = mongoose.Schema({
    locationName: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    officer: {
        type: String,
        required: true
    },
    student: {
        type: String,
        required: true
    }
});

const Incidents = module.exports = mongoose.model('Incidents', IncidentsSchema);