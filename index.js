const express = require("express");
const app = express();

// Sinalizamos para o Express que todo body da requisição
// estará estruturado em JSON
app.use(express.json());

app.get("/", function (req, res) {
    res.send("Hello World");
});

// CRUD -> Create, Read (All & Single/byId), Update, Delete

// "CRUD em memória"

// Lista de textos (strings)
const lista = ["Rick Sanchez", "Morty Smith"];
//              0               1

// [GET] /personagens
// Read All
app.get("/personagens", function (req, res) {
    res.send(lista);
});

// [GET] /personagens/:id
// Read By Id
app.get("/personagens/:id", function (req, res) {
    const id = req.params.id - 1;

    const item = lista[id];

    res.send(item);
});

// [POST] /personagens
// Create
app.post("/personagens", function (req, res) {
    // Obtém o corpo da requisição e coloca na variável item
    const item = req.body.nome;

    lista.push(item);

    res.send("Item adicionado com sucesso!");
});

// [PUT] /personagens/:id
// Update
app.put("/personagens/:id", function (req, res) {
    /*
    Objetivo: Atualizar uma personagem
    Passos:
    - Pegar o ID dessa personagem
    - Pegar a nova informação que eu quero atualizar
    - Atualizar essa nova informação na lista de personagens
    - Exibir que deu certo
    */

    const id = req.params.id - 1;

    const item = req.body.nome;

    lista[id] = item;

    res.send("Personagem atualizada com sucesso!");
});

// [DELETE] /personagens/:id
// Delete
app.delete("/personagens/:id", function (req, res) {
    const id = req.params.id - 1;

    delete lista[id];

    res.send("Personagem removida com sucesso!");
});

app.listen(3000);
