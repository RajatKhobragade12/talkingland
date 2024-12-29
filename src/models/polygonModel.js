const mongoose = require('mongoose');
const polygonSchema = new mongoose.Schema({
    name: { type: String },
    location: {
        type: { type: String, default: 'Polygon' },
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


module.exports = mongoose.model('Polygon',polygonSchema);

