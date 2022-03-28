const { Schema, model } = require("mongoose");

const CategorySchema = Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    unique: true,
  },
});

CategorySchema.methods.toJSON = function () {
  const { __v, ...category } = this.toObject();

  return category;
};

module.exports = model("Category", CategorySchema);
