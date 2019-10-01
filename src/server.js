const express = require('express');
// Colocar ./ no require pois se não irá procurar nos node_modules
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3333);
