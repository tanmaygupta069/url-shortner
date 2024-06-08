const express = require("express");
const { getServerHealthInfoController } = require("../controllers");

const router = express.Router();

router.get("/health", getServerHealthInfoController);

module.exports = router;
