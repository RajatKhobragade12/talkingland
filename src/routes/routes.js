const express = require('express');
const route = express.Router();
const { createPoint, retriveAllPoint, updatePoint } = require('../controllers/pointController');
const { createPolygon, retriveAllPolygon, updatePolygon } = require('../controllers/polygonController');

route.post('/point', createPoint);
route.get('/point', retriveAllPoint);
route.put('/point/:id', updatePoint);


route.post('/polygon', createPolygon);
route.get('/polygon', retriveAllPolygon);
route.put('/polygon/:id', updatePolygon);

module.exports = route;