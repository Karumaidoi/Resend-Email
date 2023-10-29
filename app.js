const express = require("express");
const morgan = require("morgan");

const emailRouter = require("./router/emailRouter");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/email", emailRouter);

module.exports = app;
