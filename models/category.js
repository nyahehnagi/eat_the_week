const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema(
  {
    name: String,
    image: String,
  },
  { timestamps: true }
)

const Category = mongoose.model('Category', CategorySchema)

module.exports = Category