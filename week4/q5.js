    const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/productDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);

app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post("/products", async (req, res) => {
  const { name, price } = req.body;

  const newProduct = await Product.create({
    name,
    price
  });

  res.status(201).json(newProduct);
});

app.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const updatedProduct = await Product.findByIdAndUpdate(
    id,
    { name, price },
    { new: true }
  );

  if (!updatedProduct) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(updatedProduct);
});

app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;

  const deletedProduct = await Product.findByIdAndDelete(id);

  if (!deletedProduct) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json({ message: "Product deleted successfully" });
});

app.listen(3010, () => {
  console.log("Server running on port 3010");
});