const decodeUrl = require("../../services/v1/decode.service");
const { isValidUrl } = require("../../validators/url.validators");

const decodeUrlController = (req, res) => {
  console.log(`controller called to decode url: ${req.body.url}`);
  if (!isValidUrl(req.body.url)) {
    res.status(400).json({
      message: `invalid url: ${req.body.url}`,
    });
  }

  const { result, error } = decodeUrl(req.body.url);

  if (error) {
    return res.status(error.statusCode).json(error.payload);
  }
  console.log(`decoded url for ${req.body.url} is ${result}`);

  return res.status(200).json({
    originalUrl: result,
    shortUrl: req.body.url,
  });
};

module.exports = decodeUrlController;
