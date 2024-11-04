const { Sequelize, DataTypes, sequelize, Op } = require('sequelize');
const connection = require('../DataLayer/Connection');

const User = require("../Models/UserModel")

const models = {
    User
}
module.exports = models;
