const Sequelize = require('sequelize');

const db = new Sequelize ('bundle', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

module.exports = db;