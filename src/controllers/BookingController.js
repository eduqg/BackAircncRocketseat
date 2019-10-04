const Booking = require('../models/Booking');

module.exports = {
  async store(req, res) {
    const { user_id } = req.headers;
    const { spot_id } = req.params;
    const { date } = req.body;

    const booking = await Booking.create({
      user: user_id,
      spot: spot_id,
      date,
    });

    await booking.populate('spot').populate('user').execPopulate();

    // Preciso enviar solicitação para usuário com spot_id
    // Pegar a conexão do usuário dono do spot
    const ownerSpotSocket = req.connectedUsers[booking.spot.user];
    console.log(ownerSpotSocket);
    if (ownerSpotSocket) {
      req.io.to(ownerSpotSocket).emit('booking_request', booking);
    }

    return res.json(booking);
  }
}