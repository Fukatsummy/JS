window.addEventListener("DOMContentLoaded", (event) => {
   //1 вывести заданое количество символов

//    var count = 10;
//    const symbol = "#";
//    while(count > 0)
//    {
//     loger.innerHTML += symbol;
//     count--;
//    }

   //2  задать в обратном порядке
//    var count2 = 10;
//    while(count2 > 0)
//    {
//     loger.innerHTML += "<p>" + count2 + "</p>";
//     count2--;
//    }

   //3
//    var number = 10;
//    var pow = 5;
//    while(pow > 0)
//    {
//     number *=10;
//     pow--;
//    }
//    console.log(number);

//4 вывести массив на 4 элемента
// var startDivider = 1;
// var number1 = 130;
// var number2 = 65;
// var massive = [];
// while(startDivider <= Math.min(number1,number2))
// {
//    if(number1 % startDivider == 0 && number2 % startDivider == 0)
//         massive.push(startDivider);
//    startDivider++;
// }
// console.log(massive);

//5 факториал числа
// var startDivider = 1;
// var number1 = 13;
// var factorial = 1;
// while(startDivider <= number1)
// {
//    factorial *= startDivider;
//    startDivider++;
// }
// console.log(factorial);

//6 Решить пример правильно 2+2*2
// do{
//     alert("Решите пример 2+2*2");
//     var answer = prompt();
// }
// while(answer !=6)

//7 ДЕЛИТЬ ДО ТЕХ ПОР ПОКА НЕ ПОЛУЧИШЬ ЧИСЛО МЕНЬШЕ 50
// var start = 1000;
// var limiter =50;
// var divider = 2;
// var countDivide = 0;
// do{
//     start = start / divider;
//     countDivide++;
//     console.log("Деление номер " + countDivide);
//     console.log("Получение значение " + start);
// }
// while(start >= limiter)

//8 вывести числа от 1 до 100 кратные указаному пользователем числу
// var number = 77;
// for(var i = 1; i <= 100; i++)
// {
//     if(number % i == 0)
//         console.log(i);
// }

//9 вывести числа до заданого диапазона
// var number1 = 20;
// var number2 = 93;
// for(var i = number1; i <= number2; i+=4)
// {
//     console.log(i);
// }

//10  определить просто число или нет
// var number1 = prompt();
// var prime = true;
// for(var i = 2; i <= number1/2; i++)
// {
//     if(number1 % i == 0)
//     {
//         prime = false;
//         break;
//     }
// }
// console.log(prime);

//11dz7 сдвинуть число на заданое колличество символов
// var number = prompt("Введите число");
// var left = prompt("Введите число сдвига");
// var massive = [];
// console.log(number);
// if (left > number.length)
//      left = left%number.length;
// for( var i = left; i < number.length; i++)
// {
//     massive.push(number[i])
// }
// for( var i = 0; i < left; i++)
// {
//     massive.push(number[i])
// }
// console.log(massive);

//dz8
// var day = 0;
// var next = true;
// var text = "";
// do{
//     ++day;
//     switch(day)
//     {
//     case 1: 
//          text = "This is понедельник. Дальше?";
//          next = confirm(text);
//          break;
//     case 2:
//          text = "This is вторник. Дальше?";
//          next = confirm(text);
//          break;
//     case 3: 
//          text ="This is среда. Дальше?"
//          next = confirm(text);
//          break;
//     case 4:
//          text ="This is четверг. Дальше?";
//          next = confirm(text);
//          break;
//     case 5: 
//          text = "This is тяпница. Дальше?";
//          next = confirm(text);
//          break;
//     case 6: 
//          text = "This is суббота. Дальше?";
//          next = confirm(text);
//          break;
//     case 7: 
//          text = "This is воскресенье. Дальше?";
//          next = confirm(text);
//          if (next) day = 0;
//          break;
//     }

// }
// while(next)

//10 угадай число
 alert("Загадай число  от 0 до 100");
 var answer = false;
 var botton = 0;
 var top = 100;

 while (!answer)
 {
    if(confirm("Число больше  " + Math.trunc((top+botton)/2) + "?"))
    {
        botton = Math.trunc((top+botton)/2)+1;
    }
    else if(confirm("Число меньше  " + Math.trunc((top+botton)/2) + "?")) 
    {
        top = Math.trunc((top+botton)/2);
    }
    else
    {
        alert("Ваше число " +Math.trunc((top+botton)/2));
        answer = true;
    }
}


});