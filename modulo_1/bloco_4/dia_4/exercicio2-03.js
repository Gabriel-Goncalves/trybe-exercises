function posicaoDoMenor(vetor) {
  let menor = vetor[0];
  let posicaoDoMenor = 0;

  for (let index = 1; index < vetor.length; index++) {
    if (vetor[index] < menor) {
      menor = vetor[index];
      posicaoDoMenor = index;
    }
  }

  return posicaoDoMenor;
}

let vetor = [2, 4, 6, 7, 10, 0, -3];

console.log("A posição do menor valor é a: " + posicaoDoMenor(vetor));
