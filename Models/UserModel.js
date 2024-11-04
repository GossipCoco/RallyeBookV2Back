const { DataTypes, sequelize, Op } = require("sequelize");
const Sequelize = require('sequelize');
const connection = require('../DataLayer/Connection');

const User = connection.define(
    "User",
    {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      LastName: {
        type: DataTypes.STRING,
      },
      FirstName: {
        type: DataTypes.STRING,
      },
      Login: {
        type: DataTypes.STRING,
      },
      Email: {
        type: DataTypes.STRING,
      },
      Pwd: {
        type: DataTypes.STRING,
      },
      Username: {
        type: DataTypes.STRING,
      },
      Avatar: {
        type: DataTypes.STRING,
      },
      Background: {
        type: DataTypes.DATE,
      },
      Inscription: {
        type: DataTypes.DATE,
      },
      Birthday: {
        type: DataTypes.DATE,
      },
      LastConnexion: {
        type: DataTypes.DATE,
      },
    },
    { freezeTableName: true, timestamps: false }
  );

  module.exports = User;