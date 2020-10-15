const router = require("express").Router();
const googleController = require("../../controllers/gbooksController");

// Matches with "/api/books"
router.route("/:title")
  .get(googleController.findByTitle)

module.exports = router;
