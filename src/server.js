const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const socketio = require('socket.io');
const http = require('http');
// Colocar ./ no require pois se não irá procurar nos node_modules
const routes = require('./routes');

const app = express();
const server = http.Server(app);
const io = socketio(server);

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-aawtm.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// Usar Redis em produção. Dessa forma implementada ao desconectar o servidor, todos são deslogados
const connectedUsers = {};

//  Estou ouvindo toda conexão que for feita pelo usuário
io.on('connection', socket => {
  const { user_id } = socket.handshake.query;
  connectedUsers[user_id] = socket.id;

});

app.use((req, res, next) => {
  // Dessa forma todo meu backend tem informações necessárias em req
  req.io = io;
  req.connectedUsers = connectedUsers;
  return next();
});

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

server.listen(3333);
