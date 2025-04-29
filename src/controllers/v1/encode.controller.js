const encodeUrl = require("../../services/v1/encode.service");
const {
  isValidUrl,
  stringIsAValidUrl,
} = require("../../validators/url.validators");
const { getFailurePayload } = require("../../utils/response.utils");
const { getShortUrl } = require("../../services/redis");

const encodeUrlController = async (req, res) => {
  console.log(`controller called to encode url: ${req.body.url}`);

  if (!isValidUrl(req.body.url)) {
    return res.status(400).json({
      message: `invalid url: ${req.body.url}`,
    });
  }

  let result = await getShortUrl(req.body.url);
  if (result) {
    return res.status(200).json({
      originalUrl: req.body.url,
      shortUrl: result,
    });
  }
  try {
    result = await encodeUrl(req.body.url);
  } catch (error) {
    return res
      .status(500)
      .json(
        getFailurePayload(
          "something went wrong while encoding, please try again later"
        )
      );
  }

  console.log(`encoded url for ${req.body.url} is ${result}`);

  return res.status(200).json({
    originalUrl: req.body.url,
    shortUrl: result,
  });
};

module.exports = encodeUrlController;
