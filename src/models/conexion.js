const { Sequelize } = require("sequelize")

const sequelize = new Sequelize('bd_publicaciones_node', 'postgres', 'postgresql', {
  host: 'localhost',
  port: 5433,
  dialect: 'postgres'
});

module.exports = sequelize