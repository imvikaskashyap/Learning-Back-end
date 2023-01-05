let Books = require("./../model/Books");
let dbConnection = require("./../config/db.config");
const User = require("../model/User");

let create = async () => {
  await dbConnection.sync({ force: true });
  console.log("table is created");
  insertBooks();
};

//create();

let insertBooks = async () => {
  await Books.bulkCreate([
    {
      BookName: "Animal Stories",
      Author: "Maria Hoey ",
      PublishedOn: "01 - 01 - 2022",
      AddedOn: "02 - 02 - 2022",
    },
    {
      BookName: "Cosmoknights",
      Author: "Hannah Templer",
      PublishedOn: "07 - 08 - 2022",
      AddedOn: "12 - 12 - 2022",
    },
    {
      BookName: "Doughnuts and Doom",
      Author: "Balazs Lorinczi",
      PublishedOn: "12 - 12 - 2022",
      AddedOn: "12 - 12 - 2022",
    },
    {
      BookName:
        "The League of Extraordinary Gentlemen (Vol IV): The Tempest (TPB)",
      Author: "Alan Moore",
      PublishedOn: "12 - 12 - 2022",
      AddedOn: "12 - 12 - 2022",
    },
    {
      BookName: "Secret Passages",
      Author: " Axelle Lenoir",
      PublishedOn: "12 - 12 - 2022",
      AddedOn: "12 - 12 - 2022",
    },
    {
      BookName: "Parenthesis",
      Author: "Élodie Durand",
      PublishedOn: "12 - 12 - 2022",
      AddedOn: "12 - 12 - 2022",
    },
    {
      BookName: "Super Tokyoland",
      Author: "Benjamin Reiss",
      PublishedOn: "12 - 12 - 2022",
      AddedOn: "12 - 12 - 2022",
    },
    {
      BookName: "Kodi",
      Author: "Jared Cullum",
      PublishedOn: "12 - 12 - 2022",
      AddedOn: "12 - 12 - 2022",
    },
    {
      BookName: "They Called Us Enemy",
      Author: " George Takei",
      PublishedOn: "12 - 12 - 2022",
      AddedOn: "12 - 12 - 2022",
      RentedOn: "25 - 11 - 2022",
    },
    {
      BookName: "Tonoharu (Part Three)",
      Author: "Lars Martinson",
      PublishedOn: "12 - 12 - 2022",
      AddedOn: "12 - 12 - 2022",
    },
  ]);
};

let getAllBooks = async (req, res, next) => {
  let BookName = req.query.BookName;
  let book = [];
  if (Object.keys(req.query).length == 0) {
    book = await Books.findAll();
    res.status(200).send(book);
  } else if (BookName) {
    book = await Books.findAll({
      where: {
        BookName: BookName,
      },
    });
    res.status(200).send(book);
  } else {
    res.status(404).send({
      message: "Please enter correct Keywords",
    });
    res.end();
  }
};

let getBooksById = async (req, res, next) => {
  try {
    let id = req.params.ISBN;
    let book = await Books.findByPk(id);

    res.status(200).send(book);
  } catch (err) {
    res.status(404).send({
      message: "Something went wrong",
    });
    res.end();
  }
};

let updateBooksById = async (req, res, next) => {
  try {
    let id = req.params.ISBN;
    let bookToUpdate = {
      BookName: req.body.BookName,
      Author: req.body.Author,
      PublishedOn: req.body.PublishedOn,
      AddedOn: req.body.AddedOn,
      RentedOn: req.body.RentedOn,
    };

    await Books.update(bookToUpdate, {
      where: {
        ISBN: id,
      },
    });

    let updatedBook = await Books.findByPk(id);
    res.status(200).send(updatedBook);
  } catch (err) {
    res.status(404).send({
      message: "Something went wrong",
    });
    res.end();
  }
};

let deleteBooksById = async (req, res, next) => {
  try {
    let isbn = req.params.ISBN;
    let book = Books.findByPk(isbn);
    if (book && book.rentedBy === 0) {
      await Books.destroy({
        where: {
          ISBN: isbn,
        },
      });
      res.status(210).json({
        message: "Book Deleted",
      });
    } else {
      res.status(400).json({ error: "Book has been rented by Someone!" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Something went wrong",
    });
  }
  res.end();
};

let booksToRent = async (req, res, next) => {
  try {
    let username = req.body.username;
    let bookId = req.body.ISBN;
    let book = await Books.findByPk(bookId);
    if (book && rentedBy === 0) {
      const books = await Books.findAll({
        where: {
          rentedBy: username,
        },
      });
      if (books.length < 2) {
        await Books.update(
          {
            rentedBy: username,
          },
          {
            where: {
              ISBN: bookId,
            },
          }
        );
        res.status(200).json({
          message: "Book rented!",
        });
      } else {
        res.status(400).json({
          error: "Return before renting more ---!",
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Somerthing went wrong !",
    });
    res.end();
  }
};

module.exports = {
  getAllBooks,
  getBooksById,
  updateBooksById,
  deleteBooksById,
  booksToRent,
};
