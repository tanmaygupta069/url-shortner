const express = require("express");
const { getServerHealthInfoController } = require("../controllers");
const v1Router = require("./v1");
const { rateLimit } = require("../config");
const rateLimitMiddelware = require("../middlewares/ratelimit.middleware");
const decodeUrlController = require("../controllers/v1/decode.controller");

const router = express.Router();

router.get("/health", getServerHealthInfoController);

router.get(
  "/:id",
  rateLimitMiddelware({
    limit: rateLimit.DECODE_API_LIMIT_PER_MIN,
  }),
  decodeUrlController
);
router.use("/v1", v1Router);

module.exports = router;
