let dbConnection = require("./../config/db.config");
const sequelize = require("sequelize");

let Books = dbConnection.define(
  "books",
  {
    ISBN: {
      type: sequelize.DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    BookName: {
      type: sequelize.DataTypes.STRING,
      unique: true,
    },
    Author: {
      type: sequelize.DataTypes.STRING,
      allowNull: false,
    },
    PublishedOn: {
      type: sequelize.DataTypes.STRING,
      //defaultValue: Date.now(),
      allowNull: false,
    },
    AddedOn: {
      type: sequelize.DataTypes.STRING,
      //defaultValue: Date.now(),
      allowNull: false,
    },
    RentedBy: {
      type: sequelize.DataTypes.STRING,
      defaultValue: 0,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Books;
