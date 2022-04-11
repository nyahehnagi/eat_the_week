const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: String,
    image: {
      type: String,
      default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'
    },
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
