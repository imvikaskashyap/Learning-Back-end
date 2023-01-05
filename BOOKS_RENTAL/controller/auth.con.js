let sequelize = require("sequelize");
const db = require("./../model/Index");
const Role = db.role;
const User = db.user;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const authConfig = require("./../config/auth.config");

const signUp = async (req, res, next) => {
  let user = await User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  });

  if (req.body.role) {
    let roles = await Role.findAll({
      where: {
        name: {
          [sequelize.Op.or]: req.body.role,
        },
      },
    });
    await user.setRoles(roles);
    res.status(200).send({
      status: "Success",
      message: "user registered successfully",
      data: user,
    });
  } else {
    await user.setRoles([1]);
    res.status(200).send({
      message: "you are registered with 'User' role",
    });
    res.end();
  }
};

const signIn = async (req, res, next) => {
  let userName = await User.findOne({
    where: {
      username: req.body.username,
    },
  });

  if (!userName) {
    res.status(404).send({
      message: "you have entered wrong username",
    });
    return;
  }

  let validPassword = bcrypt.compareSync(req.body.password, userName.password);

  if (!validPassword) {
    res.status(404).send({
      message: "Please entered correct password",
    });
    return;
  }

  var token = jwt.sign({ id: userName.id }, authConfig.SecretKey, {
    expiresIn: 86400,
  });

  let authorities = [];
  let role = await userName.getRoles();
  for (let i = 0; i < role.length; i++) {
    authorities.push("ROLE_ " + role[i].name.toUpperCase());
  }

  res.status(200).send({
    id: userName.id,
    username: userName.userName,
    email: userName.email,
    role: authorities,
    accessToken: token,
  });
};

module.exports = {
  signUp,
  signIn,
};
