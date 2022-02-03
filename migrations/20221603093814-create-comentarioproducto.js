'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('comentarioproductos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      comentario: {
        type: Sequelize.STRING,
        allowNull: false
      },
      idProducto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
          model: 'productos',
          key: 'id'
   }
      },
      idUsuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
          model: 'usuarios',
          key: 'id'
   }
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('comentarioproductos');
  }
};