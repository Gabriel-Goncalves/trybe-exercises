function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

// Escreva seu código abaixo.

function createDaysOfMonth() {
  const dezDaysList = [
    29,
    30,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
  ];

  const monthDays = document.querySelector("#days");

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const day = dezDaysList[index];
    const dayElement = document.createElement("li");
    dayElement.innerHTML = day;
    if (dezDaysList[index] === 25) {
      dayElement.className = "day holiday friday";
    } else if (
      dezDaysList[index] === 24 ||
      dezDaysList[index] === 25 ||
      dezDaysList[index] === 31
    ) {
      dayElement.className = "day holiday";
    } else if (
      dezDaysList[index] === 4 ||
      dezDaysList[index] === 11 ||
      dezDaysList[index] === 18 ||
      dezDaysList[index] === 25
    ) {
      dayElement.className = "day friday";
    } else {
      dayElement.className = "day";
    }

    monthDays.appendChild(dayElement);
  }
}

function criaBotaoFeriados(feriados) {
  let divPai = document.querySelector(".buttons-container");
  let botao = document.createElement("button");
  botao.id = "btn-holiday";
  botao.innerText = feriados;
  divPai.appendChild(botao);
}

let toggleFeriados = 0;
function mostraFeriados() {
  let holidayDays = document.querySelectorAll(".holiday");
  if (toggleFeriados === 0) {
    for (let index = 0; index < holidayDays.length; index++) {
      toggleFeriados = 1;
      holidayDays[index].style.backgroundColor = "pink";
    }
  } else {
    for (let index = 0; index < holidayDays.length; index++) {
      for (let index = 0; index < holidayDays.length; index++) {
        toggleFeriados = 0;
        holidayDays[index].style.backgroundColor = "rgb(238,238,238)";
      }
    }
  }
}

function criaBotaoSexta(sexta) {
  let divPai = document.querySelector(".buttons-container");
  let botao = document.createElement("button");
  botao.id = "btn-friday";
  botao.innerText = sexta;
  divPai.appendChild(botao);
}

let diasDeSexta = [4, 11, 18, 25]
let toggleSexta = 0;
function mostrarSexta() {
  let fridayDays = document.querySelectorAll(".friday");
  if (toggleSexta === 0) {
    for (let index = 0; index < fridayDays.length; index++) {
      toggleSexta = 1;
      fridayDays[index].innerText = "Sextou!";
    }
  } else {
    for (let index = 0; index < fridayDays.length; index++) {
      for (let index = 0; index < fridayDays.length; index++) {
        toggleSexta = 0;
        fridayDays[index].innerText = diasDeSexta[index];
      }
    }
  }
}


createDaysOfTheWeek();
createDaysOfMonth(); // exercicio 1
criaBotaoFeriados("Feriados"); // exercicio 2

// exercicio 3
let botaoFeriados = document.querySelector("#btn-holiday");
botaoFeriados.addEventListener("click", mostraFeriados);

// exercicio 4
criaBotaoSexta("Sexta-feira");

// exercicio 5
let botaoSexta = document.querySelector("#btn-friday");
botaoSexta.addEventListener("click", mostrarSexta);