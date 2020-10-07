const router = require("express").Router();
const bookRoutes = require("./books");
const googlebooksRoutes = require("./gbooks");

// Book routes
router.use("/books", bookRoutes);
router.use("/gbooks", googlebooksRoutes);

module.exports = router;
