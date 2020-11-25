const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

const verifyPair = (obj, key, value) => {
  const keyValue = Object.entries(obj);
  for (let index in keyValue) {
    if (keyValue[index][0] == key && keyValue[index][1]) {
      return true;
    }
  }
  return false;
};

console.log(verifyPair(lesson3, "materia", "Matemática"));
