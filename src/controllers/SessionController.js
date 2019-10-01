const User = require('../models/User');
// index, show, store, update, destroy

// Para login, logout, listagem de logados
module.exports = {
  async store(req, res) {
    const { email } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email });
    }
    
    return res.json(user);
  }
};