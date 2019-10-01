const express = require('express');

const app = express();

// Com req pego qualquer parâmetro dado na requisição
// res serve para devolver uma resposta a aquela requisição
app.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

app.listen(3333);
