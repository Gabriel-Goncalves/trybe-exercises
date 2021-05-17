const myFunc = (num1, num2, num3) => {
  return new Promise((resolve, reject) => {
    if (
      typeof num1 !== "number" ||
      typeof num2 !== "number" ||
      typeof num3 !== "number"
    ) {
      return reject(new Error("Informe apenas números"));
    }
    const result = (num1 + num2) * num3;
    if (result < 50) {
      return reject(new Error("Valor muito baixo"));
    }
    resolve(result);
  });
};

myFunc(
  Math.floor(Math.random() * 10),
  Math.floor(Math.random() * 10),
  Math.floor(Math.random() * 100)
)
  .then((response) => console.log(`resultado: ${response}`))
  .catch((error) => console.error(error));
