const { getOriginalUrl } = require("../redis");
/**
 *
 * @param {String} url original url to shorten
 * @returns short url
 */
const decodeUrl = async (url) => {
  try {
    return await getOriginalUrl(url);
  } catch (error) {
    console.error("error while getting original url: ", error);
    throw error;
  }
};

module.exports = decodeUrl;
