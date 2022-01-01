'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class factura extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  factura.init({
    idCarrito: DataTypes.INTEGER,
    metodoPago: DataTypes.STRING,
    fecha: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'factura',
  });
  return factura;
};