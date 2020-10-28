let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
};

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

for (const valor in info) {
  if (valor === "recorrente") {
    if (info[valor] === info2[valor] && info[valor] === "Sim") {
      console.log("Ambos são recorrente");
    } else if (info[valor] === info2[valor] && info[valor] === "Não") {
      console.log("Ambos não são recorrente");
    } else {
      console.log(info[valor] + " e " + info2[valor]);
    }
  } else {
    console.log(info[valor] + " e " + info2[valor]);
  }
}
