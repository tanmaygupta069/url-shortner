const URL = require("url").URL;
/**
 * 
 * @param {String} url url to validate 
 * @returns true of false
 */
  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (err) {
      return false;
    }
  };

module.exports = { isValidUrl };
