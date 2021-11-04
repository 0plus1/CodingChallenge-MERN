const mongoose = require("mongoose");

const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

const { Schema } = mongoose;

const schema = new Schema(
  {
    name: "string",
    slug: {
      type: String,
      slug: "name",
      unique: true,
    },
  },
  { timestamps: true }
);
const Shelf = mongoose.model("Shelf", schema);

module.exports = Shelf;
