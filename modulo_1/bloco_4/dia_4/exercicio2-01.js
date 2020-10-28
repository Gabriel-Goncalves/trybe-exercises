function inverteComMetodosProntos(palavra) {
  let stringAuxiliar = palavra.split("").reverse("").join("");
  /* o método split divide uma string de acordo com o parâmetro passado a ele e transforma em um array cada parte como passei '' sem espaço cada caractere será um valor no arry o reverse faz com que inverta as posições do array a primeira vira a última e a última vira a primeira o por fim o método join junta todas as posições do array em uma string só separando elas pelo parâmetro passado como passei '' não irá ter nada entre os caracteres.*/
  if (stringAuxiliar === palavra) {
    return true;
  } else {
    return false;
  }
}

function inverteComLogica(palavra) {
  let stringAuxiliar = "";
  for (let index = palavra.length - 1; index >= 0; index -= 1) {
    stringAuxiliar += palavra[index];
  }
  if (stringAuxiliar === palavra) {
    return true;
  } else {
    return false;
  }
}

console.log("utilizando métodos prontos = " + inverteComMetodosProntos("arara"));
console.log("utilizando lógica          = " + inverteComLogica("arara"));
