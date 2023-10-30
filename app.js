const express = require("express");
const morgan = require("morgan");

// Setting up our Route
const emailRouter = require("./router/emailRouter");

const app = express();

// Configuring our app
app.use(morgan("dev"));
app.use(express.json());

// Email Route
app.use("/api/v1/email", emailRouter);

module.exports = app;
