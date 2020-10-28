function moda(vetor) {
  let numModa = [vetor[0], 0];
  let qtdRepeticao = 0;

  for (let index = 0; index < vetor.length; index++) {
    for (let j = index; j < vetor.length; j++) {
      if (vetor[j] === vetor[index]) {
        qtdRepeticao += 1;
      }
    }
    if (qtdRepeticao > numModa[1]) {
      numModa[0] = vetor[index];
      numModa[1] = qtdRepeticao;
    }
    qtdRepeticao = 0;
  }

  return numModa[0];
}

let vetor = [2, 3, 2, 5, 8, 2, 3];

console.log("o número que mais se repete é o: " + moda(vetor));
