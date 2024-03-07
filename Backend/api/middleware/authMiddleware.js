const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    // Extract token from the Authorization header
    const token = req.header("Authorization");
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No token provided" });
    }

    // Split the header to get the actual token (remove "Bearer ")
    const tokenWithoutBearer = token.split(" ")[1];

    if (!tokenWithoutBearer) {
      return res
        .status(401)
        .json({ message: "Unauthorized: Invalid token format" });
    }

    // Verify the token using the secret key
    const decoded = jwt.verify(tokenWithoutBearer, process.env.JWT_SecretKey);

    // Attach decoded user data to the request object
    req.user = decoded;

    // Continue with the request
    next();
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    } else {
      return res.status(500).json({ message: "Internal server error" });
    }
  }
};
