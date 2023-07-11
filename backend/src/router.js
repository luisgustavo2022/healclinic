const express = require("express");
const { response } = require("./app");
const pacientscontrollers = require("./controllers/pacientscontrollers");


const router = express.Router();

router.get("/pacients",  pacientscontrollers.getAll );

module.exports = router;