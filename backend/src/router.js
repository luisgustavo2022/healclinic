const express = require("express");

const router = express.Router();

const { response } = require("./app");

const patientscontrollers = require("./controllers/patientscontrollers");

router.get("/patients",  patientscontrollers.getPatient );
router.post("/patients",  patientscontrollers.newPatient );

module.exports = router;