function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek()

// 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function daysMonth(){
  let getdays = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index +=1){
    let day = dezDaysList[index];
    let dayli = document.createElement('li');

    if (day === 24 | day === 31) {
      dayli.className = "day holiday"
      dayli.innerHTML = day;
      getdays.appendChild(dayli);
    }else if (day === 4 | day === 11 | day === 18){
      dayli.className = "day friday"
      dayli.innerHTML = day;
      getdays.appendChild(dayli)
    } else if (day === 25){
      dayli.className = "day holiday friday"
      dayli.innerHTML = day;
      getdays.appendChild(dayli)
    }else{
      dayli.className = "day"
      dayli.innerHTML = day;
      getdays.appendChild(dayli)
    }
  }
} 

daysMonth()

//2 

function holidays(Feriados){
  let btnHoliday = document.createElement('button');
  let btnHolidayId = 'btn-holiday';
  let btnHolidayContainer = document.querySelector('.buttons-container');

  btnHoliday.innerHTML = Feriados;
  btnHoliday.id = btnHolidayId;
  btnHolidayContainer.appendChild(btnHoliday);
}

holidays("Feriados");

//3
// Foi necessária consulta ao gabarito da questão.

function changeHolidays () {
  let btnHolidays = document.querySelector('#btn-holiday');
  let setHolidays = document.querySelectorAll('.holiday');
  let changeColor = 'green';
  let setupColor = 'rgb(238,238,238)';

  btnHolidays.addEventListener('click', function() {
    for (let index = 0; index < setHolidays.length; index += 1){
      if (setHolidays[index].style.backgroundColor === changeColor){
        setHolidays[index].style.backgroundColor = setupColor;
      } else {
        setHolidays[index].style.backgroundColor = changeColor;
      }
     }
    })
}; 

changeHolidays();

//4
function fridays(Sextas){
  let btnFriday = document.createElement('button');
  let btnFridayId = 'btn-friday';
  let btnFridayContainer = document.querySelector('.buttons-container');

  btnFriday.innerHTML = Sextas;
  btnFriday.id = btnFridayId;
  btnFridayContainer.appendChild(btnFriday);
}

fridays("Sexta-feira");

//5
function changeFridays (sextou) {
  let btnFridays = document.querySelector('#btn-friday');
  let setFridays = document.querySelectorAll('.friday');
  let changeText = 'Sextou';

  btnFridays.addEventListener('click', function() {
    for (let index = 0; index < setFridays.length; index += 1){
      if (setFridays[index].innerHTML !== changeText){
        setFridays[index].innerHTML = changeText;
      } else {
        setFridays[index].innerHTML = sextou[index];
      }
     }
    })
}; 

let dezFridaysList = [ 4, 11, 18, 25];
changeFridays(dezFridaysList);

//6
// Foi necessária consulta ao gabarito da questão.
// Consulta complementar https://developer.mozilla.org/en-US/docs/Web/API/Event/target
function dayIn() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
  })
};

function dayOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
  })
};

dayIn();
dayOut();


//7
function task (tarefa) {
  let newTask = document.createElement("span");
  let localTask = document.querySelector('.my-tasks');

  newTask.innerHTML = tarefa;
  localTask.appendChild(newTask);
};

task("teste");

//8

function taskLegend (cor){
  let divLegend = document.createElement("div");
  let divLocalTask = document.querySelector('.my-tasks');
  divLegend.className = "task";
  divLegend.style.backgroundColor = cor;
  divLocalTask.appendChild(divLegend);
}

taskLegend('blue');

//9
function eventTask () {
  let targetTask = document.querySelector('.task');
  let changeClass = document.getElementsByClassName('task selected');

  targetTask.addEventListener('click', function(event) {
      if ( changeClass === 0){
        event.target.className = "task selected";
      } else {
        event.target.className = "task";
      }
    })
}; 

eventTask();