let n = 5;
let estrelas;

for (let linha = 0; linha < n; linha += 1) {
  estrelas = "";
  for (let coluna = 0; coluna < n - (linha + 1); coluna += 1) {
    estrelas += " ";
  }
  let tamanhoString = estrelas.length;
  for (let complemento = 0; complemento < n - tamanhoString; complemento += 1) {
    estrelas += "*";
  }
  console.log(estrelas);
}
