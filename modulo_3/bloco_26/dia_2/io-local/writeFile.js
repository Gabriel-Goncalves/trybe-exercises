const fs = require("fs/promises");

fs.writeFile("./meu-arquivo.txt", "O TERCEIRO FILME DE HARRY POTTER É O MELHOR")
  .then(() => {
    console.log("Arquivo escrito com sucesso!");
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });
