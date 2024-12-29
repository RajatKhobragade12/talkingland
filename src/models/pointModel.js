const mongoose = require('mongoose');
const pointSchema = new mongoose.Schema({
    name: { type: String },
    location: {
        type: { type: String, default: 'Point' },
        coordinates: {
            latitude: {
                type: Number
            },
            longitude: {
                type: Number
            }
        }
    }
});

module.exports = mongoose.model('Point', pointSchema)