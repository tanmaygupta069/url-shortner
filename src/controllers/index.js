const { getServerHealthInfo } = require("../services");

const getServerHealthInfoController = (_,res) => {
  const result = getServerHealthInfo();
  return res.status(200).json(result);
};

module.exports = { getServerHealthInfoController };
