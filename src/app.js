// Importa o Express
const express = require("express");

// Inicializa o aplicativo Express
const app = express();

// Define a rota principal
app.get("/", (req, res) => {
  res.send("Hello World! - Pull Request(PR)");
});

// Adicionando um Pull Request
console.log("Hello World! - Pull Request");

// Define a porta onde o servidor vai rodar
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
