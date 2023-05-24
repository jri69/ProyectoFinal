const { Usuario, UsuarioSchema } = require('./userModel');

function setupModels(sequelize) {
  Usuario.init(UsuarioSchema, Usuario.config(sequelize));
}

module.exports = setupModels;
