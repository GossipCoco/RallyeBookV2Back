const { DataTypes, sequelize, Op } = require("sequelize");
const Sequelize = require('sequelize');
const connection = require('../DataLayer/Connection');
const Chapter = connection.define(
    "Chapter",
    {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      Title: {
        type: DataTypes.STRING,
      },
      Chapter: {
        type: DataTypes.TEXT,
      },
      previsionnalNbWords: {
        type: DataTypes.INTEGER,
      },
      RealNbWords: {
        type: DataTypes.INTEGER,
      },
      PercentAdvencement: {
        type: DataTypes.INTEGER,
      },
      ChapterNumber: {
        type: DataTypes.INTEGER,
      },
    },
    { freezeTableName: true, timestamps: false }
  );

module.exports = Chapter