const express = require('express');

const routes = express.Router();

// Com req pego qualquer parâmetro dado na requisição
// res serve para devolver uma resposta a aquela requisição
// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição e delete)
// req.body = Acessar corpo da requição (para criação, edição)

// POST http://localhost:3333/users
routes.post('/users', (req, res) => {
  return res.json(req.body);
});

module.exports = routes;
