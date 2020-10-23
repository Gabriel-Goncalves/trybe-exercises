let valor = 1000;
let valorVenda = 1550;

if (valor < 0 || valorVenda < 0) {
  console.log("Os valores não podem ser menor que 0");
} else {
  let valorCustoTotal = valor * 1.2;
  let lucro = valorVenda - valorCustoTotal;
  let lucroTotal = lucro * 1000;
  console.log("Lucro total = R$ " + lucroTotal);
}
