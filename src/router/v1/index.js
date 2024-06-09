const { rateLimit } = require("../../config");
const express = require("express");
const encodeUrlController = require("../../controllers/v1/encode.controller");
const decodeUrlController = require("../../controllers/v1/decode.controller");
const rateLimitMiddelware = require("../../middlewares/ratelimit.middleware");

const {
  urlBlackListingMiddleware,
} = require("../../middlewares/blacklisting.middleware");

const v1Router = express.Router();

v1Router.post(
  "/encode",
  rateLimitMiddelware({
    limit: rateLimit.ENCODE_API_LIMIT_PER_MIN,
  }),
  urlBlackListingMiddleware,
  encodeUrlController
);

v1Router.post(
  "/decode",
  rateLimitMiddelware({
    limit: rateLimit.DECODE_API_LIMIT_PER_MIN,
  }),
  decodeUrlController
);

module.exports = v1Router;
