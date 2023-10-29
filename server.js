const app = require("./app");

const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 4000;

const server = app.listen(port, () => {
  console.log("Server started");
});
