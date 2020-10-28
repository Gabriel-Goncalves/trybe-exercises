function maiorString(palavras) {
  let maiorPalavra = palavras[0];
  for (let index = 1; index < palavras.length; index++) {
    if (palavras[index].length > maiorPalavra.length) {
      maiorPalavra = palavras[index];
    }
  }
  return maiorPalavra;
}

let vetor = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"];
let maiorPalavra = maiorString(vetor);
console.log(`A maior palavra é = ${maiorPalavra}`);
