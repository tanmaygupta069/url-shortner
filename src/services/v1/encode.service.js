const { v4: uuidv4 } = require("uuid");
const { server } = require("../../config");
const { saveShortenedUrl } = require("../redis");
/**
 *
 * @param {String} url original url to shorten
 * @returns short url
 */
const encodeUrl = async (url) => {
  const id = uuidv4();
  const shortUrl = `${server.DOMAIN_URL}${id}`;
  try {
    await saveShortenedUrl(url, shortUrl);
  } catch (error) {
    console.error('error occured while encoding url: ',error);
    throw error;
  }
  return shortUrl;
};

module.exports = encodeUrl;
