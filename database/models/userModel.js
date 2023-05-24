const { Model, DataTypes, Sequelize } = require('sequelize');

const USUARIO_TABLE = 'usuario';

const UsuarioSchema = {
  id: {
    allowNull: false, // not null
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING(50)
  },
  primer_apellido: {
    allowNull: false,
    type: DataTypes.STRING(50)
  },
  segundo_apellido: {
    allowNull: false,
    type: DataTypes.STRING(50)
  },
  cedula_identidad: {
    allowNull: false,
    type: DataTypes.STRING(50)
  },
  fecha_nacimiento: {
    allowNull: false,
    type: DataTypes.STRING(50)
  }
}

class Usuario extends Model {
  static associate(models) {
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USUARIO_TABLE,
      modelName: 'Usuario',
      timestamps: false
    }
  }
}


module.exports = { USUARIO_TABLE, UsuarioSchema, Usuario }
