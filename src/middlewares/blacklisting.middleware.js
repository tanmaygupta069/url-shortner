const config = require("../config");
const getBlackListedUrls = require("../constants/blacklisted.urls.constants");
const { getFailurePayload } = require("../utils/response.utils");

const urlBlackListingMiddleware = (req, res, next) => {
  const blackListedUrls = getBlackListedUrls();
  if (blackListedUrls.includes(req.body.url)) {
    return res.status(403).json(getFailurePayload("not allowed"));
  }
  next();
};

module.exports = { urlBlackListingMiddleware };
