const encodeUrl = require("../../services/v1/encode.service");
const { isValidUrl } = require("../../validators/url.validators");

const encodeUrlController = (req, res) => {
  console.log(`controller called to encode url: ${req.body.url}`);
  if (!isValidUrl(req.body.url)) {
    res.status(400).json({
      message: `invalid url: ${req.body.url}`,
    });
  }

  const { result, error } = encodeUrl(req.body.url);

  if (error) {
    return res.status(error.statusCode).json(error.payload);
  }
  console.log(`encoded url for ${req.body.url} is ${result}`);

  res.status(200).json({
    originalUrl: req.body.url,
    shortUrl: result,
  });
};

module.exports = encodeUrlController;
