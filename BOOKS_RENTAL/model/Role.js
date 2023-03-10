let dbConnection = require("../config/db.config");
let sequelize = require("sequelize");

const Role = dbConnection.define(
  "roles",
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Role;
