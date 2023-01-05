let db = require("../model/Index");

let User = db.user;
let Role = db.Role; // yha humne index.js model me another variable jo bnaya tha usko import kr rhe hain

let checkDuplicateName = async (req, res, next) => {
  let user = await User.findOne({
    where: {
      username: req.body.username,
    },
  });

  if (user) {
    res.status(404).send({
      message: "User already exist",
    });
    return;
  }
  next();
};

let checkRolesExisted = async (req, res, next) => {
  if (req.body.role) {
    for (let i = 0; i < req.body.role.length; i++) {
      if (!Role.includes(req.body.role[i])) {
        res.status(400).send({
          message: "Failed! Role does not exist = " + req.body.role[i],
        });
        return;
      }
    }
  }
  next();
};

module.exports = {
  checkDuplicateName,
  checkRolesExisted,
};
