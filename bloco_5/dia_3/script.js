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
    let dayli = document.createElement('li)');

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


