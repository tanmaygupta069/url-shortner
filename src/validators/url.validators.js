const validator = require("validator");
/**
 * 
 * @param {String} url url to validate 
 * @returns true of false
 */
const isValidUrl = (url) => validator.isURL(url);

module.exports = { isValidUrl };
