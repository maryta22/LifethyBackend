'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('productos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idCategoria: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
               model: 'categoria',
               key: 'id'
        }
      },
      idDescuento: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
               model: 'descuentos',
               key: 'id'
        }
      },
      nombre: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
      precio: {
        type: Sequelize.DECIMAL
      },
      fecha: {
        type: Sequelize.DATEONLY
      },
      imagen: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('productos');
  }
};