let db = {};

db.user = require("./User");
db.role = require("./Role");

db.role.belongsToMany(db.user, {
  through: "user_role",
  foreignKey: "roleId",
  otherKey: "userId",
});

db.user.belongsToMany(db.role, {
  through: "user_role",
  foreignKey: "userId",
  otherKey: "roleId",
});

db.Role = ["admin", "user"];

module.exports = db;
