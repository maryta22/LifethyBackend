'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class descuento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  descuento.init({
    nombre: DataTypes.STRING,
    descuento: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'descuento',
  });
  return descuento;
};