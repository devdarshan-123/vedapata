const express = require("express");
const cors = require("cors");

// ✅ IMPORT ROUTES
const authRoutes = require("../routes/authRoutes");
const productRoutes = require("../routes/productRoutes");

// ✅ IMPORT DB CONNECTION
const db = require("../config/db");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ TEST DB CONNECTION (VERY IMPORTANT)
db.connect()
  .then(() => {
    console.log("PostgreSQL Connected ✅");
  })
  .catch((err) => {
    console.log("DB Connection Error ❌", err);
  });

// ✅ ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

// ✅ TEST API
app.get("/", (req, res) => {
  res.send("API is running...");
});

// ✅ START SERVER
app.listen(8081, () => {
  console.log("Server running on http://localhost:8081");
});