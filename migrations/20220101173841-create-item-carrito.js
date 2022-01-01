'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('itemsCarrito', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idCarrito: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
               model: 'carritos',
               key: 'id'
        }
      },
      idProducto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
               model: 'productos',
               key: 'id'
        }
      },
      cantidad: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('itemsCarrito');
  }
};