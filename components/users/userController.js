const { models } = require('../../libs/sequelize');
const sequelize = require('sequelize');

class UsuarioController {
  constructor() { }

  async add(data) {
    const usuario = await models.Usuario.create({
      ...data,
    });
    return usuario;
  }

  async edit(data, id) {
    const usuario = await this.find(id);
    const usuarioUpdated = await usuario.update({
      ...data,
    });
    return usuarioUpdated;
  }

  async delete(id) {
    const usuario = await this.find(id);
    await usuario.destroy();
    return id;
  }

  async find(id) {
    const usuarioFound = await models.Usuario.findByPk(id);
    return usuarioFound;
  }

  async getAll() {
    const usuarios = await models.Usuario.findAll();
    return usuarios;
  }

  async promedioEdad() {
    const usuarios = await models.Usuario.findAll();
    const totalUsuarios = usuarios.length;
    const sumaEdades = usuarios.reduce((acc, usuario) => {
      const { fecha_nacimiento } = usuario;
      const edad = this.calcularEdad(fecha_nacimiento);
      return acc + edad;
    }, 0);
    const promedioEdad = sumaEdades / totalUsuarios;
    return {
      promedioEdad: promedioEdad
    };
  }

  calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const año_nacimiento = fechaNacimiento.split('/')[2];
    const cumpleanos = new Date(parseInt(año_nacimiento), 0, 1);
    let edad = hoy.getFullYear() - cumpleanos.getFullYear();
    const mes = hoy.getMonth() - cumpleanos.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < cumpleanos.getDate())) {
      edad--;
    }
    return edad;
  }
}

module.exports = UsuarioController;
