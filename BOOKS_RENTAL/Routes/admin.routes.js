let express = require("express");
let adminRouter = express.Router();
let booksController = require("../controller/books.con");

adminRouter.get("/", booksController.getAllBooks);

adminRouter.get("/:ISBN", booksController.getBooksById);

adminRouter.put("/:ISBN", booksController.updateBooksById);

adminRouter.delete("/:ISBN", booksController.deleteBooksById);

module.exports = adminRouter;
