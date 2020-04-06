// Imports models
let Experiences = require('../models/Experiences');

exports.getExperiences = async (req, res) => {
    const experiences = await Experiences.findAll()
    res.render('experience', {
        page: 'Our experience',
        experiences
    })
}

exports.postExperience = async (req, res) => {
    const experiences = await Experiences.findAll();
    let {name, mail, message} = req.body;
    const errors = [];
    if (!name) {
        errors.push({'message': 'Add your name'})
    };
    if (!mail) {
        errors.push({'message': 'Add your mail'})
    };
    if (!message) {
        errors.push({'message': 'Add your experience'})
    };

    // Displays errors
    if (errors.length > 0) {
        res.render('experience', {
            errors,
            name,
            mail,
            message,
            experiences
        })
    }
    else {
        // Sends the form to the db
        const experiences = await Experiences.create({
            name,
            mail,
            message
        })
        res.redirect('/experience')
    }
}