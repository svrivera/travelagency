// Imports models
let Travel = require('../models/Travel');
let Experiences = require('../models/Experiences');

exports.getHome = async (req, res) => {
    // We need two promises to give to index experiences and trips from travel
    const trips = await Travel.findAll({limit: 3});
    const experiences = await Experiences.findAll({limit: 3});
    res.render('index', {
        page: 'Home',
        classType: 'home',
        trips: trips,
        experiences: experiences
    });
}