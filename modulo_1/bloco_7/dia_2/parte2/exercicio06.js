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

const joinLessons = (obj1, obj2, obj3) => {
  const allLessons = {};
  allLessons["lesson1"] = Object.assign({}, obj1);
  allLessons["lesson2"] = Object.assign({}, obj2);
  allLessons["lesson3"] = Object.assign({}, obj3);
  return allLessons;
};

const allLessons = joinLessons(lesson1, lesson2, lesson3);

const countStudents = (obj) => {
    const keys = Object.keys(obj);
    let students = 0;
    for (let index = 0; index < keys.length; index += 1) {
        students += obj[keys[index]].numeroEstudantes
    }
    return students;
}

console.log(countStudents(allLessons));