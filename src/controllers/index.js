const { getServerHealthInfo } = require("../services");

const getServerHealthInfoController = (req, res) => {
  console.log("calling server health controller with req : ", req);
  const result = getServerHealthInfo();
  return res.status(200).json(result);
};

module.exports = { getServerHealthInfoController };
