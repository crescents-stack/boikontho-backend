const express = require("express");
const routerAPI_V2 = require("./api/v2/routes");
const routerAPI_V1 = require("./api/v1/routes");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the Bookshop API");
});
router.use("/api/v1", routerAPI_V1);
router.use("/api/v2", routerAPI_V2);


module.exports = router;
