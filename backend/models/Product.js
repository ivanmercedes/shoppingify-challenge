const { Schema, model } = require("mongoose");

const ProductSchema = Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    unique: true,
  },
  category: {
    type: Schema.Types.ObjectID,
    ref: "Category",
    required: true,
  },
  description: {
    type: String,
  },
  image: { type: String },
});

ProductSchema.methods.toJSON = function () {
  const { __v, ...data } = this.toObject();

  return data;
};

module.exports = model("Product", ProductSchema);
