function encode(codificar) {
  let codificado = codificar
    .split("a")
    .join("1")
    .split("e")
    .join("2")
    .split("i")
    .join("3")
    .split("o")
    .join("4")
    .split("u")
    .join("5");
  return codificado;
}
function decode(decodificar) {
  let decodificado = decodificar
    .split("1")
    .join("a")
    .split("2")
    .join("e")
    .split("3")
    .join("i")
    .split("4")
    .join("o")
    .split("5")
    .join("u");
  return decodificado;
}

module.exports = {
    encode,
    decode
}