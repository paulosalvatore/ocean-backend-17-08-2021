const express = require("express");
const app = express();

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

app.listen(3000);
