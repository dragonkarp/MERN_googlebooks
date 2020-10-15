const router = require("express").Router();
const booksController = require("../../controllers/savedBooksController");

router.route("/")
  .post(booksController.create);

router.route("/saved")
  .get(booksController.findAll)


router.route("/saved/:id")
  .delete(booksController.remove)


module.exports = router;
