const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
// Colocar ./ no require pois se não irá procurar nos node_modules
const routes = require('./routes');

const app = express();
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-aawtm.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);
