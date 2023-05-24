'use strict';

const { USUARIO_TABLE, UsuarioSchema } = require('../models/userModel');


module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(USUARIO_TABLE, UsuarioSchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(USUARIO_TABLE);
  }
};
