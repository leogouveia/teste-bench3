const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Client extends Model { }
Client.init({
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    username: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar: DataTypes.STRING,
    password: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    registered_at: DataTypes.STRING,
}, { sequelize, modelName: 'Client', tableName: 'tb_clientes', timestamps: false })

module.exports = Client