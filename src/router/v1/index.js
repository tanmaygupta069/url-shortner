const express = require("express");
const encodeUrlController = require("../../controllers/v1/encode.controller");
const decodeUrlController = require("../../controllers/v1/decode.controller");

const {
  urlBlackListingMiddleware,
} = require("../../middlewares/blacklisting.middleware");

const v1Router = express.Router();

v1Router.post("/encode", urlBlackListingMiddleware, encodeUrlController);

v1Router.post("/decode", decodeUrlController);

module.exports = v1Router;
