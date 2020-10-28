function posicaoDoMaior(vetor) {
  let maior = vetor[0];
  let posicaoDoMaior = 0;

  for (let index = 1; index < vetor.length; index++) {
    if (vetor[index] > maior) {
      maior = vetor[index];
      posicaoDoMaior = index;
    }
  }

  return posicaoDoMaior;
}

let vetor = [2, 3, 6, 7, 10, 1];

console.log("A posição do maior valor é a: " + posicaoDoMaior(vetor));
