const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
  thumbnail: String,
  company: String,
  price: Number,
  techs: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }
}, {
  toJSON: {
    virtuals: true,
  },
});
// Toda vez que um virtual for convertido em json, quero que calcule os virtuals

SpotSchema.virtual('thumbnail_url').get(function () {
  return `http://localhost:3333/files/${this.thumbnail}`
});

module.exports = mongoose.model('Spot', SpotSchema);