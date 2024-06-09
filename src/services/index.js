const datetimeUtils = require("../utils/datetime.utils");
/**
 * 
 * @returns server health object
 */
const getServerHealthInfo = () => {
  const uptimeInSeconds = process.uptime();
  return {
    status: "OK",
    uptime: datetimeUtils.formatUptime(uptimeInSeconds),
  };
};

module.exports = { getServerHealthInfo };
