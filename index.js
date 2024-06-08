const config = require("./src/config");
const app = require('./src/server')

app.listen(config.server.PORT, (err) => {
  if (err) {
    console.log(`error starting server at port ${config.server.PORT}`);
  } else {
    console.log(`server is listening at port ${config.server.PORT}`);
  }
});
