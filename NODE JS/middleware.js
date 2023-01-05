
const express = require("express");
const ajs = express();
const reqFilter = require('./middlewareFile')
const route = express.Router()

//ajs.use(reqFilter);
route.use(reqFilter)

route.get("/", (req, resp) => {
  resp.send("Welcome to Home page");
});

ajs.get("/index", (req, resp) => {
  resp.send("Welcome to Profle page");
});

ajs.get("/login", (req, resp) => {
  resp.send("Welcome to Login page");
});

ajs.use('/',route)

ajs.listen(4500);
