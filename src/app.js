// Importa o Express
const express = require("express");

// Inicializa o aplicativo Express
const app = express();

// Define a rota principal
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Define a porta onde o servidor vai rodar
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
