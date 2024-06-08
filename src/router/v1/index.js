const express = require("express");
const encodeUrlController = require("../../controllers/v1/encode.controller");

const v1Router = express.Router();

v1Router.post("/encode", encodeUrlController);

module.exports = v1Router;
