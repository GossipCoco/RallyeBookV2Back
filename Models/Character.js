const { DataTypes, sequelize, Op } = require("sequelize");
const Sequelize = require('sequelize');
const connection = require('../DataLayer/Connection');

const Character = connection.define(
    "Character",
    {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      FirstName: {
        type: DataTypes.STRING,
      },
      LastName: {
        type: DataTypes.STRING,
      },
      NickName: {
        type: DataTypes.STRING,
      },
      PhysicalApparence: {
        type: DataTypes.TEXT,
      },
      Personnality: {
        type: DataTypes.TEXT,
      },
      Biography: {
        type: DataTypes.TEXT,
      },
      Birthday: {
        type: DataTypes.DATE,
      },
      Image: {
        type: DataTypes.STRING,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  module.exports = Character