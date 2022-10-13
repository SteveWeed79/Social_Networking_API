const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  item: { type: String, required: true },
  stockCount: Number,
  price: Number,
  inStock: Boolean,

  lastAccessed: { type: Date, default: Date.now },
});

const Item = mongoose.model("Item", grocerySchema);

const handleError = (err) => console.error(err);

Item.create(
  {
    item: "banana",
    stockCount: 10,
    price: 1,
    inStock: true,
  },
  (err) => (err ? handleError(err) : console.log("Created new document"))
);

module.exports = Item;
