const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:sen567Sx@db:5432/db01') // Example for postgres


async function connect() {

    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.")
        return sequelize;
    } catch {
        console.error("Unable to connect to database.", error)
        return false;
    }
}


module.exports = {
    sequelize,
    connect,
}