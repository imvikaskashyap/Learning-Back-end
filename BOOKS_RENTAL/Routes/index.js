let express = require("express");
let router = express.Router();
let adminRouter = require("./admin.routes");
let userRouter = require("./user.routes");
let authRouter = require("./auth.routes");

router.get("/home", (req, res) => {
  res.send("This is the Home page");
  res.end();
});

router.use("/books/rental/admin", adminRouter);

router.use("/books/rental/user", userRouter);

router.use("/books/rental/auth", authRouter);

module.exports = router;
