const express = require("express");

const router = express.Router();

const { response } = require("./app");

const pacientscontrollers = require("./controllers/pacientscontrollers");

router.get("/pacients",  pacientscontrollers.getPacient );

module.exports = router;