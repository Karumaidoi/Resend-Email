const express = require("express");

const emailController = require("../controllers/emailController");
const smsController = require("../controllers/smsController");

const router = express.Router();

router.route("/sendEmail").post(emailController.sendEmail);
router.route("/sendSMS").post(smsController.sendMessage);

module.exports = router;
