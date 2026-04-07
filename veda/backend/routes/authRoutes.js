const express = require("express");
const router = express.Router();
const db = require("../config/db");

// REGISTER
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    await db.query(
      "INSERT INTO users (name, email, password) VALUES ($1,$2,$3)",
      [name, email, password]
    );

    res.json({ message: "Registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const result = await db.query(
    "SELECT * FROM users WHERE email=$1 AND password=$2",
    [email, password]
  );

  if (result.rows.length > 0) {
    res.json({ message: "Login success" });
  } else {
    res.status(400).json({ message: "Invalid credentials" });
  }
});

module.exports = router;