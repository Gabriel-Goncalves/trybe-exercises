// const express = require("express");
// const app = express();
// const authMiddleware = require("./auth-middleware");

// app.get("/aberto", (req, res) => {
//   res.status(200).json({ message: "Eu posso ser acessado sem autenticação." });
// });

// app.get("/secure", authMiddleware, (req, res) => {
//   res.status(200).json({
//     message:
//       "se esse middleware foi chamado pelo Express, é porque deu tudo certo dentro de `authMiddleware`, e o `next` foi chamado",
//   });
// });

// app.get("/otherSecure", authMiddleware, (req, res) => {
//   res.status(200).json({
//     message: "podemos utilizar o mesmo middleware pra quantas rotas quisermos",
//   });
// });

// function timeMiddleware(req, res, next) {
//   req.startTime = Date.now();
//   next();
// }

// app.get("/tempo", timeMiddleware, (req, res) => {
//   setTimeout(() => {
//     let endTime = Date.now() - req.startTime;

//     res.status(200).json({
//       message: `essa request foi processada em ${endTime} milissegundos`,
//     });
//   }, 1000);
// });

// app.listen(3000, () => {
//   console.log("Aplicação ouvindo na porta 3000");
// });
// index.js
const express = require('express');
const simpsons = require('./simpsons');

const app = express();

/* Todas as rotas com /simpsons/<alguma-coisa> entram aqui e vão para o roteador. */
app.use('/simpsons', simpsons);

app.listen(3000);