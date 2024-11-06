// BaseModel.js
const { DataTypes } = require("sequelize");
const connection = require('../DataLayer/Connection');

class BaseModel {
  constructor() {
    this.connection = connection;
  }

  // Méthode générique pour définir des propriétés communes
  static commonFields() {
    return {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },      
    };
  }

  // Exemple de méthode commune pour tous les modèles
  static logCreation() {
    console.log(`${this.name} instance created`);
  }
}

module.exports = BaseModel;
