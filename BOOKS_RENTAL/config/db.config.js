let sequelize = require("sequelize");

let instance = new sequelize("books_rental", "root", "V8006383806k", {
  host: "localhost",
  dialect: "mysql",
  operatorAliases: 0,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = instance;
