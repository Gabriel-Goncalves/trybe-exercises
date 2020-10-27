let n = 5;
let quadrado = '';

if (n <= 0) {
  console.log("Valor de n inválido");
} else {
  for (let count = 0; count < n; count++) {
    quadrado += "*";
  }
  for (let count = 0; count < n; count++) {
    console.log(quadrado);
  }
}
