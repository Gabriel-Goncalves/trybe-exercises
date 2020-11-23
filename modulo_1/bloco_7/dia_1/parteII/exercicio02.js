const longestWord = (stringWords) => {
  let arrayWords = stringWords.split(" ");
  let biggest = arrayWords[0];
  let positionBiggest = 0;
  for (let index = 0; index < arrayWords.length; index += 1) {
    if (arrayWords[index].length > biggest.length) {
      biggest = arrayWords[index];
      positionBiggest = index;
    }
  }
  return biggest;
};

console.log(
  longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")
);
