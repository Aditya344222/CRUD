const express = require("express");
require("./db/config");
const cors = require("cors");
const User = require("./db/users");
const product = require("./db/products");
const Jwt = require("jsonwebtoken");
const JwtKey = "e-comm";
//const { default: mongoose } = require("mongoose");
const app = express();
app.use(express.json());
app.use(cors());

app.post("/insert", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  resp.send(result);
  console.log(result);
});

app.post("/login", async (req, resp) => {
  if (req.body.email && req.body.password) {
    let user = await User.findOne(req.body).select("-password");
    user ? resp.send(user) : resp.send("No user found");
  } else {
    resp.send("Fill all entries");
  }
});

app.post("/add-product", async (req, resp) => {
  let products = new product(req.body);
  let result = await products.save();
  resp.send(result);
  console.log(result);
});

app.get("/products", async (req, resp) => {
  let products = await product.find();
  console.log(products);
  if (products.length > 0) {
    resp.send(products);
  } else {
    resp.send("No products found");
  }
});

app.delete("/delete/:id", async (req, resp) => {
  const data = await product.deleteOne({ _id: req.params.id });
  resp.send(data);
  console.log("hii");
});

app.get("/product/:id", async (req, resp) => {
  let result = await product.findOne({ _id: req.params.id });
  if (result) {
    console.log(result);
    resp.send(result);
  } else {
    resp.send("No product found");
  }
});

app.put("/product/:id", async (req, resp) => {
  let result = await product.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  );
  resp.send(result);
});

app.get("/search/:key", async (req, resp) => {
  let result = await product.find({
    $or: [
      { Name: { $regex: req.params.key } },
      { Price: { $regex: req.params.key } },
      { Category: { $regex: req.params.key } },
      { Brand: { $regex: req.params.key } },
    ],
  });
  resp.send(result);
  console.log(result);
});

app.listen(5000);
