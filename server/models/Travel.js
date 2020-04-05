const Sequelize = require('sequelize');

const db = require('../config/database');

const Travel = db.define('trip', {
    title:{
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.STRING
    },
    date_gone: {
        type: Sequelize.DATE
    },
    date_arrive: {
        type: Sequelize.DATE
    },
    image: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    available: {
        type: Sequelize.STRING
    }
} ); 

module.exports = Travel;