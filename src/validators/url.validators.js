const validator = require("validator");

const isValidUrl = (url) => validator.isURL(url);

module.exports = { isValidUrl };
