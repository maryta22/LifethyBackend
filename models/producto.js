'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class producto extends Model {
    static associate(models) {
     producto.belongsTo(models.descuento,{
       foreignKey:"idDescuento", as:"descuento"
     })
    }
  };
  producto.init({
    idCategoria: DataTypes.INTEGER,
    idDescuento: DataTypes.INTEGER,
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