const isAdmin = (req, res, next) => {
  if (req.body.user.roles.includes("admin")) {
    next();
  } else {
    next();
  }
};

module.exports = isAdmin;
