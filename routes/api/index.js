const router = require("express").Router();
const bookRoutes = require("./books");
const googleBooksRoutes = require("./gbooks");

// Book routes
router.use("/books", bookRoutes);
router.use("/gbooks", googleBooksRoutes);

module.exports = router;
