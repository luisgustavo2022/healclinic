const express = require("express");
const router = express.Router();
const { response } = require("./app");
const patientscontrollers = require("./controllers/patientscontrollers");
const newPatientMiddleware = require("./middlewares/newPatientMiddleware")

router.get("/patients",  patientscontrollers.getPatient );
router.post("/patients", newPatientMiddleware.validateBody,  patientscontrollers.newPatient );
router.delete("/patients/:id",  patientscontrollers.deletePatiens );
router.put("/patients/:id", newPatientMiddleware.validateBody, patientscontrollers.updatePatient );

module.exports = router;