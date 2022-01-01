'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  producto.init({
    idCategoria: DataTypes.INTEGER,
    idDescuento: DataTypes.INTEGER,
    idInventario: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    precio: DataTypes.DECIMAL,
    fecha: DataTypes.DATEONLY,
    imagen: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'producto',
  });
  return producto;
};