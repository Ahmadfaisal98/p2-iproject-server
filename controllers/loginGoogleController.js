const { OAuth2Client } = require("google-auth-library");
const { generateJWT } = require("../helpers/jsonWebToken");
const { User } = require("../models");

class LoginGoogleController {
  static loginGooglePost(req, res, next) {
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
    let payload = null;
    client
      .verifyIdToken({
        idToken: req.body.token,
        audience: process.env.GOOGLE_CLIENT_ID,
      })
      .then((ticket) => {
        payload = ticket.getPayload();
        return User.findOne({
          where: {
            email: payload.email,
          },
        });
      })
      .then((foundUser) => {
        if (foundUser) {
          return foundUser;
        } else {
          return User.create({
            name: payload.name,
            email: payload.email,
            role: "staff",
            password: process.env.GOOGLE_PASSWORD,
          });
        }
      })
      .then((user) => {
        const access_token = generateJWT({
          id: user.id,
          email: user.email,
        });
        res.status(200).json({ access_token, fullName: user.name });
      })
      .catch((err) => {
        next({ statusCode: 500 });
      });
  }
}

module.exports = LoginGoogleController;
