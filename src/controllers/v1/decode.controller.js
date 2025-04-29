const decodeUrl = require("../../services/v1/decode.service");
const { isValidUrl } = require("../../validators/url.validators");
const { getFailurePayload } = require("../../utils/response.utils");
const { server } = require("../../config");

const decodeUrlController = async (req, res) => {
  const shortUrl = server.DOMAIN_URL + req.params["id"];
  console.log(shortUrl);
  console.log(`controller called to decode url: ${shortUrl}`);

  if (!isValidUrl(shortUrl)) {
    return res.status(400).json({
      message: `invalid url: ${shortUrl}`,
    });
  }
  let result;
  try {
    result = await decodeUrl(shortUrl);
  } catch (error) {
    return res
      .status(500)
      .json(getFailurePayload("something went wrong, please try again later"));
  }

  console.log(`decoded url for ${shortUrl} is ${result}`);

  console.log(`redirecting to ${result}...`);
  return res.redirect(301,result)
  // return res.status(200).json({
  //   originalUrl: result,
  //   shortUrl: req.body.url,
  // });
  // return;
};

module.exports = decodeUrlController;
