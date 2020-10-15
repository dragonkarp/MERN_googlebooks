const router = require("express").Router();
const booksController = require("../../controllers/savedBooksController");

router.route("/")
  .post(booksController.create);

router.route("/saved")
  .get(booksController.findAll)


module.exports = router;
