const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

import Post from "../../../models/Post";

export default async function handler(req, res) {
  if (req.method === "POST") {
    if (req.body.type === "payment") {
      await Post.findByIdAndUpdate(
        req.body._id,
        {
          payment: true,
        },
        (err, user) => {
          if (!err) {
            client.messages
              .create({
                body: `Please pay an amount of 450 to https://youtu.be/dQw4w9WgXcQ`,
                from: "+14357408562",
                to: `+91${req.body.phone}`,
              })
              .then((message) => {
                console.log(message);
              })
              .catch((error) => {
                console.log(error);
              });
            res.status(200).send("Approved successfully");
          }
        }
      );
    }

    if (req.body.type === "approve") {
      const referenceId = Math.floor(
        100000000000 + Math.random() * 900000000000
      );

      await Post.findByIdAndUpdate(
        req.body._id,
        {
          approved: true,
        },
        (err, user) => {
          if (!err) {
            client.messages
              .create({
                body: `Job approved. Ref Id:${referenceId}`,
                from: "+14357408562",
                to: `+91${req.body.phone}`,
              })
              .then((message) => {
                console.log(message);
              })
              .catch((error) => {
                console.log(error);
              });
            res.status(200).send("Approved successfully");
          }
        }
      );
    }
  }
}
