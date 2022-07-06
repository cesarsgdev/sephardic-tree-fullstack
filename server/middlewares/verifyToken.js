const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  jwt.verify(req.headers["x-access-token"], "rayados", function (err, decoded) {
    if (err) {
      res.status(403).json({ success: false, message: `Invalid token` });
      return;
    }

    req.body.user = decoded;
    next();
  });
};

module.exports = verifyToken;
