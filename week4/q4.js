const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser());

const authMiddleware = (req, res, next) => {
  const role = req.cookies.role;

  if (!role) {
    return res.status(401).json({ message: "Unauthorized. Please login." });
  }

  req.role = role;
  next();
};

app.post("/login", (req, res) => {
  const { role } = req.body;

  if (role !== "admin" && role !== "client") {
    return res.status(400).json({ message: "Invalid role" });
  }

  res.cookie("role", role);

  if (role === "admin") {
    return res.json({ message: "Admin LoggedIn" });
  }

  res.json({ message: "Client LoggedIn" });
});

app.get("/dashboard", authMiddleware, (req, res) => {
  if (req.role === "admin") {
    return res.json({ message: "Welcome Admin" });
  }

  res.json({ message: "Welcome Client" });
});

app.get("/logout", (req, res) => {
  res.clearCookie("role");
  res.json({ message: "Logged out successfully" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});