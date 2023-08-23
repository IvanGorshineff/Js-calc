// Запросить у пользователя число и определить, оно положительное, отрицательное или ноль


let input1 = document.querySelector('.inp1');
let btn1 = document.querySelector('.button1');

btn1.onclick = () => {
let num = +input1.value;

  if (num == 0) {
    alert('Вы ввели число 0')
  } else if (num > 0) {
alert('Вы ввели положительное число.')
  } else { 
alert('Вы ввели отрицательное число.')
  }
}


// Запросить у пользователя его возраст и проверить корректность введенных данных(0–120 лет) 


let input2 = document.querySelector('.inp2');
let btn2 = document.querySelector('.button2');

btn2.onclick = () => {
  let num2 = +input2.value;

  if (num2 <= 0) {
    alert('Вы ввели не корректное число! Попробуйте еще раз.')
  } else if (num2 > 120) {
    alert ('Ого! Да Вы долгожитель!')
  } else {
    alert('Ваш возраст  ' + num2);
  }
}


// Запросить у пользователя время(часы, минуты, секунды)
//     и проверить корректность введенных данных.

let inp1 = document.querySelector('#input1');
let inp2 = document.querySelector('#input2');
let inp3 = document.querySelector('#input3');
let btn3 = document.querySelector('.button3');
let newDiv = document.querySelector('.newdiv');

btn3.onclick = () => {
  let hours = +inp1.value;
  let min = +inp2.value;
  let sec = +inp3.value;

if (hours > 24) {
  alert('Вы ввели не корректное число! больше 24 часов не бывает :)')
} else if  (hours < 0) {
  alert('Вы ввели отрицательное число! Попробуйте еще раз')
} else {
  alert('Сейчас ' + hours + ' часов')
}

  if (sec > 60) {
    alert('Вы ввели не корректное число! больше 60 секунд не бывает :)')
  } else if(sec < 0) {
    alert('Вы ввели отрицательное число! Попробуйте еще раз')
  } else {
    alert(sec + ' секунд')
  }

  if (min > 60) {
    alert('Вы ввели не корректное число! больше 60 минут не бывает :)')
  } else if (min < 0) {
    alert('Вы ввели отрицательное число! Попробуйте еще раз')
  } else {
    alert(min + ' минут')
  }

  newDiv.innerHTML = 'Сейчас ' + hours + ' часов ' + min + ' минут ' + sec + ' секунд'
}

// --------- Запросить у пользователя число и вывести его модуль

let input3 = document.querySelector('.inp3');
let btn4 = document.querySelector('.button4');


btn4.onclick = () => {
  num3 = +input3.value;
  alert('' + Math.abs(num3));
}


// Запросить у пользователя название планеты.Если пользователь ввел «Земля» или «земля», то вывести «Привет,
//   землянин!», в остальных случаях вывести «Привет, инопланетянин!»


let input4 = document.querySelector('.inp4');
let btn5 = document.querySelector('.button5');

btn5.onclick = () => {
  planet = input4.value;
  switch (true) {
    case planet == 'Земля' || planet == 'земля':
      alert('Привет, землянин!')
      break;
  
    default:
      alert('Привет, инопланетянин!')
      break;
  }
}

/* Реализовать калькулятор. Пользователь вводит 2 числа и знак (+ - * /). В зависимости от введенного знака решить пример и вывести результат. */


const resultElement = document.querySelector('#result');
const inpCalc1 = document.querySelector('#input01');
const inpCalc2 = document.querySelector('#input02');
const submit = document.querySelector('.subm');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const divideBtn = document.querySelector('#divide');
const multiplyBtn = document.querySelector('#multiply');
let action = '+';

plusBtn.onclick = () => action = '+';
minusBtn.onclick = () => action = '-';
divideBtn.onclick = () => action = '/';
multiplyBtn.onclick = () => action = '*';


function colorResult(result) {
  if (result < 0) {
    resultElement.style.color = 'red'
  } else {
    resultElement.style.color = 'green'
  }
  resultElement.textContent = result
}

submit.onclick = function () {
  if (action == '+') {
    const sum = Number(inpCalc1.value) + Number(inpCalc2.value)
    colorResult(sum)
  } else if (action == '-') {
    const sum = Number(inpCalc1.value) - Number(inpCalc2.value)
    colorResult(sum)
  }  else if (action == '/') {
 const sum = Number(inpCalc1.value) / Number(inpCalc2.value)
    colorResult(sum)
  } else if (action == '*') {
    const sum = Number(inpCalc1.value) * Number(inpCalc2.value)
    colorResult(sum)
}

}