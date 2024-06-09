const cors = require("cors");
const {
  getAllowedOrigins,
  getAllowedOrigins,
} = require("../constants/cors.constants");

const corsOptions = {
  origin: getAllowedOrigins(),
  methods: getAllowedOrigins(),
};

module.exports = cors(corsOptions);
