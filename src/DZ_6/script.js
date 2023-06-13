window.addEventListener("DOMContentLoaded", (event)=> {

    // console.log(analyzeString('Hello, 123!')); // Letters: 5, Digits: 3, Other: 2
    // console.log(numberToText(35)); // тридцать пять
    // console.log(transformString('HeLlO 123!')); // hElLo ___!
    // console.log(cssToCamelCase('font-size')); // fontSize
    // console.log(createAbbreviation('cascading style sheets')); // CSS
    // console.log(createAbbreviation('объектно-ориентированное программирование')); // ООП
    // console.log(concatenateStrings('Hello, World!')); // Функция для объединения строк:
    // console.log(urlDetails('https://itstep.org/ua/about'));//Функция для вывода подробной информации о URL:
    // console.log(splitString('10/08/2020')); //Функция для разделения строк:
    console.log(print('"Today is %1 %2.%3.%4", "Monday", 10, 08, 2020')); //Функция для вывода текста по заданному шаблону:

});

//1. Написать функцию, которая принимает строку и выводит
//статистику о ней: количество букв, количество цифр и количество других знаков.
/*function analyzeString(str) {
let letters = 0;
let digits = 0;
let other = 0;
for (let i = 0; i < str.length; i++) {
if (str[i].match(/[a-zA-Z]/)) {
letters++;
} else if (str[i].match(/[0-9]/)) {
digits++;
} else {
other++;
}
}
console.log(Letters: ${letters}, Digits: ${digits}, Other: ${other});
}*/

// 2. Функция для перевода числа в текст
/*function numberToText(num) {
let ones = ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
let tens = ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
let twentyToNinety = ['двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
if (num < 10) {
return ones[num];
} else if (num >= 10 && num < 20) {
return tens[num - 10];
} else if (num >= 20 && num < 100) {
if (num % 10 === 0) {
return twentyToNinety[num / 10 - 2];
} else {
return ${twentyToNinety[Math.floor(num / 10) - 2]} ${ones[num % 10]};
}
} else {
return 'Введите двузначное число';
}
}*/

// 3. Функция для замены регистра и цифр в строке
/*function transformString(str) {
let transformedStr = '';
for (let i = 0; i < str.length; i++) {
if (str[i].match(/[A-Z]/)) {
transformedStr += str[i].toLowerCase();
} else if (str[i].match(/[a-z]/)) {
transformedStr += str[i].toUpperCase();
} else if (str[i].match(/[0-9]/)) {
transformedStr += '_';
} else {
transformedStr += str[i];
}
}
return transformedStr;
}*/

// 4. Функция для преобразования стилей CSS
/*function cssToCamelCase(str) {
let words = str.split('-');
let camelCaseWords = words.map(function(word, index) {
if (index === 0) {
return word;
} else {
return word[0].toUpperCase() + word.slice(1);
}
});
return camelCaseWords.join('');
}*/

// 5. Функция для создания аббревиатуры из словосочетания
/*function createAbbreviation(str) {
let words = str.split(' ');
let abbreviation = '';
for (let i = 0; i < words.length; i++) {
if (words[i][0].match(/[A-Za-z]/)) {
abbreviation += words[i][0].toUpperCase();
}
}
return abbreviation;
}*/

//6 Функция для объединения строк:

/*function concatenateStrings(...args) {
  return args.join('');
}*/

//7 Написать функцию – калькулятор. Функция принимает строку с примером, определяет, какое действие необходимо
//выполнить (+ - * /), переводит операнды в числа, решает пример и возвращает результат.

// function calculator(str) {
// let operator = str.match(/[+\-*/]/)[0];
// let operands = str.split(/[+\-*/]/).map(parseFloat);
// switch(operator) {
//   case "+":
//     return operands[0] + operands[1];
//   case "-":
//     return operands[0] - operands[1];
//   case "*":
//     return operands[0] * operands[1];
//   case "/":
//     return operands[0] / operands[1];
//   default:
//     return "Invalid operation";
// }
// }

//8 Написать функцию, которая получает url и выводит подробную информацию о нем. Например: url “https://itstep.org/ua/about”, информация "протокол : https, домен : itstep.org, путь: /ua/about" .

/*function urlDetails(url) {
  let protocol = url.match(/^(\w+):\/\//)[1];
  let domain = url.match(/\/\/([^/]+)/)[1];
  let path = url.match(/\/(.+)/)[1];
  
  return `Протокол: ${protocol}, Домен: ${domain}, Путь: ${path}`;
}*/

//10 Написать функцию, которая принимает строку и разделитель и возвращает массив подстрок, разбитых с помощью указанного разделителя. 
//Например: строка "10/08/2020" , разделитель “/”, результат: “10”,"08" , “2020”. Выполняя задание, не используйте функцию split().

/*function splitString(str, separator) {
  let substrings = [];
  let substring = "";
  for(let i = 0; i < str.length; i++) {
    if(str[i] !== separator) {
      substring += str[i];
    } else {
      substrings.push(substring);
      substring = "";
    }
  }
  substrings.push(substring);
  return substrings;
}*/




//НЕ ПОЛУЧИЛОСЬ

//Написать функцию вывода текста по заданному шаблону. Функция принимает первым параметром шаблон, в тексте которого может использоваться % после символа %
// указывается индекс входного параметра. При выводе вместо % индекс необходимо вывести значение соответствующего входного параметра. Например: print("Today is %1 %2.%3.%4",
// "Monday", 10, 08, 2020) должна вывести "Today is Monday 10.08.2020" .

function print(template, ...args) {
  for(let i = 1; i <= args.length; i++) {
    template = template.replace(`%${i}`, args[i-1]);
  }
  console.log(template);
}