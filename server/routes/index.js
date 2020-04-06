// Imports Express
const express = require('express');
const router = express.Router();


// Imports controllers
const aboutusController = require('../controllers/aboutusController');
const homeController = require('../controllers/homeController');
const travelController = require('../controllers/travelController');
const experiencesController = require('../controllers/experienceController');

module.exports = () => {
    router.get('/', homeController.getHome);
    
    router.get('/aboutus', aboutusController.getAboutus);

    router.get('/travel', travelController.getAllTrips);

    router.get('/travel/:id', travelController.getTrip);
    
    router.get('/experience', experiencesController.getExperiences);

    router.post('/experience', experiencesController.postExperience);

    return router;
}
