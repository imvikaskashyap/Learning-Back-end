const express = require("express");
const path = require("path");

const app = express();
const publicpath = path.join(__dirname, "public");

app.set("view engine", "ejs");

app.get("/about", (_, resp) => {
  resp.sendFile(`${publicpath}/about.html`);
});

app.get("/index", (_, resp) => {
  const user = {
    name: "Vikas kashyap",
    city: "Rampur",
    nation: "India",
    skills: ["C++", "Java", "Python", "JS", "MongoDB"],
  };
  resp.render("index", { user });
});

app.get("/login", (_, resp) => {
  resp.render("login");
});
app.listen(4800);
