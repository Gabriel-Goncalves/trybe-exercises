let n = 5;
let estrelas;

for (let linha = 1; linha <= n; linha += 1) {
  estrelas = "";
  for (let coluna = 0; coluna < linha; coluna += 1) {
    estrelas += "*";
  }
  console.log(estrelas);
}
