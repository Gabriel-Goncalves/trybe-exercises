function comparaFinal(word, ending) {
  let inicio = word.length - ending.length;
  let fimWord = word.substring(inicio, word.length);
  if (fimWord == ending) {
    return true;
  } else {
    return false;
  }
}

console.log(comparaFinal("trybe", "be"));
console.log(comparaFinal("joaofernando", "fernan"));
