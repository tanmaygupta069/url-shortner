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
    },
    redis: {
      HOST : process.env.REDIS_HOST,
      PORT: process.env.REDIS_PORT
    },
  });
};

module.exports = getConfig();
