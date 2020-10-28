function somatorio(n) {
  let soma = 0;
  for (let index = 1; index <= n; index++) {
    soma += index;
  }
  return soma;
}

console.log(somatorio(5));
