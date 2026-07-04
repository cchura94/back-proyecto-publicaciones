const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("./conexion");

const Publicacion = sequelize.define(
  'Publicacion',
  {
    categoria: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    titulo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    imagenes: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: []
    },
    user: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fecha: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    // Other model options go here
  },
);

Publicacion.sync();

module.exports = Publicacion;