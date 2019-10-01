const User = require('../models/User');
// index, show, store, update, destroy

// Para login, logout, listagem de logados
module.exports = {
  async store(req, res) {
    const { email } = req.body;
    const user = await User.create({ email });
    return res.json(user);
  }
};