const { UnauthenticatedError } = require("../errors");
const jwt = require("jsonwebtoken");
const authMiddleware = (req, res, next) => {
  const authHeaders = req.headers.authorization;
  if (!authHeaders || !authHeaders.startsWith("Bearer ")) {
    throw new UnauthenticatedError("Not Authorized!!!");
  }
  try {
    const token = authHeaders.split(" ")[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const {userId , name} =payload
    req.user= {userId , name}
    next();
  } catch (error) {
    throw new UnauthenticatedError("Not Authorized!!!");
  }
};



module.exports = authMiddleware