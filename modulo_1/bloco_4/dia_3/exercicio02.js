let n = 5;
let estrelas;

if (n <= 0) {
  console.log("Valor de n inválido");
} else {
  for (let linha = 1; linha <= n; linha += 1) {
    estrelas = "";
    for (let coluna = 0; coluna < linha; coluna += 1) {
      estrelas += "*";
    }
    console.log(estrelas);
  }
}
