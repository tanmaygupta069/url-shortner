require("dotenv").config();
const { environments } = require("../constants");

const getConfig = () => {
  if (environments[process.env.ENV] == undefined) {
    throw new Error(`invalid env: ${process.env.ENV}`);
  }
  return Object.freeze({
    server: {
      PORT: process.env.PORT,
      ENV: process.env.ENV,
      DOMAIN_URL: process.env.DOMAIN_URL,
    },
    redis: {
      HOST: process.env.REDIS_HOST,
      PORT: process.env.REDIS_PORT,
      USER: process.env.REDIS_USER,
      PASSWORD: process.env.REDIS_PASSWORD,
    },
    rateLimit: {
      ENCODE_API_LIMIT_PER_MIN: process.env.ENCODE_API_LIMIT_PER_MIN,
      DECODE_API_LIMIT_PER_MIN: process.env.DECODE_API_LIMIT_PER_MIN,
      STANDARD_HEADERS : process.env.STANDARD_HEADERS
    },
  });
};

module.exports = getConfig();
