const { Sequelize } = require('sequelize');

module.exports = new Sequelize('postgres://postgres:sen567Sx@db:5432/db01', {
    pool: {
        max: 5,
        min: 1,
        acquire: 30000,
        idle: 10000
    }
}) // Example for postgres;