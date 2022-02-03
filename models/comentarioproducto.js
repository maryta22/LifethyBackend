'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comentarioproducto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      comentarioproducto.belongsTo(models.usuario,{
        foreignKey: "idUsuario"
      })
    }
  }
  comentarioproducto.init({
    comentario: DataTypes.STRING,
    idProducto: DataTypes.INTEGER,
    idUsuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'comentarioproducto',
  });
  return comentarioproducto;
};