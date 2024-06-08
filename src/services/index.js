const datetimeUtils = require("../utils/datetime.utils");

const getServerHealthInfo = () => {
  const uptimeInSeconds = process.uptime();
  return {
    status: "OK",
    uptime: datetimeUtils.formatUptime(uptimeInSeconds),
  };
};

module.exports = { getServerHealthInfo };
