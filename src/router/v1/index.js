const express = require("express");
const encodeUrlController = require("../../controllers/v1/encode.controller");
const {
  urlBlackListingMiddleware,
} = require("../../middlewares/blacklisting.middleware");

const v1Router = express.Router();

v1Router.post("/encode", urlBlackListingMiddleware, encodeUrlController);

module.exports = v1Router;
