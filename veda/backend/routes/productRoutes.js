const express = require("express");
const router = express.Router();
const db = require("../config/db");


// ✅ GET ALL PRODUCTS
router.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM products ORDER BY id ASC");
    res.json(result.rows);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});


// ✅ GET SINGLE PRODUCT
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.query(
      "SELECT * FROM products WHERE id = $1",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(result.rows[0]);

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error fetching product" });
  }
});


// ✅ ADD PRODUCT (UPDATED WITH PRICE)
router.post("/", async (req, res) => {
  const { title, description, image_url, price } = req.body;

  try {
    const result = await db.query(
      "INSERT INTO products (title, description, image_url, price) VALUES ($1, $2, $3, $4) RETURNING *",
      [title, description, image_url, price]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to add product" });
  }
});


// ✅ UPDATE PRODUCT (UPDATED WITH PRICE)
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, image_url, price } = req.body;

  try {
    const result = await db.query(
      "UPDATE products SET title=$1, description=$2, image_url=$3, price=$4 WHERE id=$5 RETURNING *",
      [title, description, image_url, price, id]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to update product" });
  }
});


// ✅ DELETE PRODUCT
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await db.query("DELETE FROM products WHERE id=$1", [id]);
    res.json({ message: "Product deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to delete product" });
  }
});

module.exports = router;