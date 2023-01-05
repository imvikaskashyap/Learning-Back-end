let express = require("express");
let app = express();
let serverConfig = require("./config/server.config");
let router = require("./Routes/index");
let bodyParser = require("body-parser");
const Role = require("./model/Role");
const db = require("./model/Index");
let dbConnection = require("./config/db.config");

app.use(bodyParser.json());
app.use(router);

let insertRole = async () => {
  await Role.bulkCreate([
    {
      id: 1,
      name: "admin",
    },
    {
      id: 2,
      name: "user",
    },
  ]);
  console.log("Role added");
};

//insertRole();

app.listen(serverConfig.PORT, () => {
  console.log("server listening at port " + serverConfig.PORT);
});
