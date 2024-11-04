const { DataTypes, sequelize, Op } = require("sequelize");
const Sequelize = require('sequelize');
const connection = require('../DataLayer/Connection');
const Role = connection.define(
    "Role",
    {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  module.exports = Role