const redis = require("redis");
const config = require("../../config");

let redisClient = null;
const getRedisClient = async () => {
  if (redisClient == null) {
    await createRedisClient();
  }
  return redisClient;
};

const createRedisClient = async () => {
  const redisHostUrl = `${config.redis.HOST}:${config.redis.PORT}`;
  redisClient = await redis
    .createClient({
      url: redisHostUrl,
    })
    .on("error", (err) => {
      console.error("redis connection failed: ", err);
      throw err;
    })
    .connect();
};

module.exports = {
    getRedisClient,
    createRedisClient
}
