const mongoose = require('mongoose');

// O Schema indica quais campos o usuário irá ter, como vai ser
// active: Boolean,
// name: String,
// age: Number,
const UserSchema = new mongoose.Schema({
  email: String,
});

// Exportação e criação da minha Model
module.exports = mongoose.model('User', UserSchema);