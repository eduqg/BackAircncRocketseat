const express = require('express');

const app = express();
app.use(express.json());
// Com req pego qualquer parâmetro dado na requisição
// res serve para devolver uma resposta a aquela requisição
// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição e delete)
// req.body = Acessar corpo da requição (para criação, edição)

// GET http://localhost:3333/users
app.get('/users', (req, res) => {
  return res.json({ message: `Idade ${req.query.idade}` });
});

// PUT http://localhost:3333/users/:id
app.put('/users/:id', (req, res) => {
  return res.json({ id: req.params.id });
});

// POST http://localhost:3333/users
app.post('/users', (req, res) => {
  return res.json(req.body);
});

app.listen(3333);
