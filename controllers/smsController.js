const client = require("twilio")(
  "AC2605c77ad0285f4187fae650c26b3dac",
  "4a5298f95a0d14f5b5eba488cfc38c6b"
);

exports.sendMessage = (req, res, next) => {
  const { message, phoneNumber } = req.body;

  const sendSMSClient = () =>
    client.messages.create({
      body: message,
      from: "+13613210954",
      to: phoneNumber,
    });
  try {
    sendSMSClient()
      .then((response) => {
        res.status(200).json({
          status: "success",
          message: response.body,
        });
      })
      .catch((err) => {
        res.status(400).json({
          status: "failed",
          message: err?.message || "Something went wrong.Please try again",
        });
      });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "failed",
      message: error?.message || "Something went wrong.Please try again",
    });
  }
};
