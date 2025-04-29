const { getRedisClient } = require("../../database/redis");
/**
 *
 * @param {String} originalUrl original url
 * @param {String} shortUrl the encoded url
 */
const saveShortenedUrl = async (originalUrl, shortUrl) => {
  const client = await getRedisClient();

  const originalUrlMapKey = getOriginalUrlMapKey(originalUrl);
  const shortUrlMapKey = getShortUrlMapKey(shortUrl);

  let res;
  try {
    res = await client
      .multi()
      .set(originalUrlMapKey, shortUrl)
      .set(shortUrlMapKey, originalUrl)
      .exec();
  } catch (error) {
    console.error("error in save shortened url service: ", error);
    throw error;
  }
  console.log("res from redis set transaction ", res);
};

const getShortUrlMapKey = (url) => `short#${url}`;

const getOriginalUrlMapKey = (url) => `original#${url}`;

const getOriginalUrl = async (url) => {
  console.log("get original url");
  const client = await getRedisClient();
  const key = getShortUrlMapKey(url);
  return await client.get(key);
};

const getShortUrl = async (url) => {
  const client = await getRedisClient();
  const key = getOriginalUrlMapKey(url);
  return await client.get(key);
};



module.exports = {
  saveShortenedUrl,
  getOriginalUrl,
  getShortUrl
};
