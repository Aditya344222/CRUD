const  mongoose  = require("mongoose");
const productsSchema = new mongoose.Schema({
  Name: String,
  Price: String,
  Category: String,
  userId: String,
  Company: String,
});
module.exports = mongoose.model("products", productsSchema);
