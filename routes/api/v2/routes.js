const express = require("express");
const routerAPI_V2 = express.Router();

routerAPI_V2.get("/", (req, res) => {
    res.status(200).send("Hello api/v2!")
});

module.exports = routerAPI_V2;