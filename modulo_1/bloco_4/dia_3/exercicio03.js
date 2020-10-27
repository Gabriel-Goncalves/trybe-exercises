let n = 5;
let estrelas;

if (n <= 0) {
  console.log("Valor de n inválido");
} else {
  for (let linha = 0; linha < n; linha += 1) {
    estrelas = "";
    for (let coluna = 0; coluna < n - (linha + 1); coluna += 1) {
      estrelas += " ";
    }
    let tamanhostr = estrelas.length;
    for (let complemento = 0; complemento < n - tamanhostr; complemento += 1) {
      estrelas += "*";
    }
    console.log(estrelas);
  }
}
