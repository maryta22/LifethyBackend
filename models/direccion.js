'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class direccion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  direccion.init({
    idUsuario: DataTypes.INTEGER,
    telefono: DataTypes.STRING,
    direccion: DataTypes.STRING,
    ciudad: DataTypes.STRING,
    provincia: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'direccion',
    tableName: 'direcciones'
  });
  return direccion;
};