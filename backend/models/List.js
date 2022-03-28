const { Schema, model } = require("mongoose");

const ListSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },

    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    ],

    status: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

ListSchema.methods.toJSON = function () {
  const { __v, ...list } = this.toObject();

  return list;
};

module.exports = model("List", ListSchema);
