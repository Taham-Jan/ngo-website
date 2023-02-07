const mongoose = require('mongoose')

const donateSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    programs: [],
    image: {
        type: String,
        required: [true, 'Please add an image'],
      },
    description: {
      type: String,
      required: [true, 'Please add a description about this program'],
    },
  },
  {
    timestamps: true,
  }
)

const Donate = mongoose.model('donate', donateSchema)
module.exports = Donate; 