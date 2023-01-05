let express = require("express");
let userRouter = express.Router();
let booksController = require("../controller/books.con");

userRouter.get("/", booksController.getAllBooks);

userRouter.get("/:ISBN", booksController.getBooksById);

userRouter.get("/", booksController.booksToRent);

module.exports = userRouter;
