// Imports models
const Travel = require('../models/Travel');

exports.getAllTrips = async (req, res) => {
    const trips = await Travel.findAll()
            res.render('travel', {
                page: 'Your Next Adventure',
                trips
    })
}

exports.getTrip = async (req, res) => {
    const trip = await Travel.findByPk(req.params.id)
    res.render('trip', {
            trip
        })
}