const router = require("express").Router();
const bookRoutes = require("./books");
const gbooksRoutes = require("./gbooksAPI.js");

// Book routes
router.use("/books", bookRoutes);
router.use("/gbooksAPI", gbooksRoutes);

module.exports = router;
