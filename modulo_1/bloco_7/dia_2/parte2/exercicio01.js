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


const addTurno = (obj, key, value) => {
    obj[key] = value;
}

console.log(lesson2)
addTurno(lesson2, 'turno', 'matutino')
console.log(lesson2)