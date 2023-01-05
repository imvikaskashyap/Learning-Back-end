let dbConnection = require("./../config/db.config");
let sequelize = require("sequelize");

let User = dbConnection.define(
  "user",
  {
    username: {
      type: sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = User;
