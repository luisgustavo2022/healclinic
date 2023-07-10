const express = require("express");
const { response } = require("./app");

const router = express.Router();

router.get("/", (req, res) => res.status(200).send("bobou")  );

module.exports = router;