const resend = require("resend");

exports.sendEmail = async (req, res) => {
  //1) Create a Resend Client
  const resendy = new resend.Resend(process.env.RESEND_PASSKEY);

  // 2) Get the Data out of the request body
  const { from, to, subject, content, attachments } = req.body;

  //3). Make the email send query
  try {
    const data = await resendy.emails.send({
      from: from,
      to: [to],
      subject: subject,
      html: `<div>${content} .</div>`,
      attachments: attachments,
      tags: [
        {
          name: "category",
          value: "confirm_email",
        },
      ],
    });

    //4) If ERROR🌟 throw a new Error
    if (data.statusCode) {
      const { message } = { ...data };
      throw new Error(message);
    }

    //5) Send the response to the user with the email ref id

    res.status(200).json({
      status: "success",
      data: {
        emailRef: data,
      },
    });
  } catch (err) {
    //6) Send Bad Request if something went wrong
    res.status(404).json({
      status: "failed",
      message: err?.message || "Something went wrong",
    });
  }
};
