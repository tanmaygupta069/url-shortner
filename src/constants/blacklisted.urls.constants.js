const config = require("../config");
const { environments } = require("../constants");

const localBlackListedUrls = ["https://localhost:8080"];
const devBlackListedUrls = ["https://localhost:8081"];
const prodBlackListedUrls = ["https://xhamster.com","https://pornhub.com"];


const getBlackListedUrls = () => {
  switch (config.server.ENV) {
    case environments.LOCAL:
      return localBlackListedUrls;
    case environments.DEV:
      return devBlackListedUrls;
    case environments.PROD:
      return prodBlackListedUrls;
    default:
      return [];
  }
};


module.exports = getBlackListedUrls;