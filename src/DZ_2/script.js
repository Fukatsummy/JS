window.addEventListener("DOMContentLoaded", (event) => {
    //task_1
    //Запросить у пользователя его возраст и определить, кем онявляется: ребенком (0–2), подростком (12–18), взрослым
    //(18_60) или пенсионером (60– ...).
    // var age = Number(prompt("Введите Ваш возраст : "));
    // if(age > 0 && age <= 12){
    //     alert("Ребенок");
    // }
    // if(age > 12 && age <= 18){
    //     alert("Подросток");
    // }
    // if(age > 18 && age <= 65){
    //     alert("Взрослый");
    // }
    // if(age > 65 && age <= 1000000000){
    //     alert("Пенсионер");
    // }
    //else {
    //    age="Некорректные данные,  попробуйте снова.";
    //}
    //console.log(age);
    
    //task_2
    //Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!,
    //2–@, 3–# и т. д).
    // var number = prompt("Введите цифру от 0 до 9");
    // var value = "";
    // switch(number)
    // {
    //     case "1": value = "!"; break;
    //     case "2": value = "@"; break;
    //     case "3": value = "#"; break;
    //     case "4": value = "$"; break;
    //     case "5": value = "%"; break;
    //     case "6": value = "^"; break;
    //     case "7": value = "&"; break;
    //     case "8": value = "*"; break;
    //     case "9": value = "("; break;
    //     case "0": value = ")"; break;
    //     default: console.log("Некорректные данные, попробуйте снова.");
    // }
    
    // task_3
    //Запросить у пользователя трехзначное и число и проверить,
    //есть ли в нем одинаковые цифры.
    //  var number = prompt("Введите трехзначное число ");
    //  var fnumber = Math.trunc(number / 100);
    //  var snumber = Math.trunc((number % 100) / 10);
    //  var thnumber = (number % 100) % 10;
    //  if(fnumber == snumber || fnumber == thnumber || snumber == thnumber)
    //  {
    //   console.log("В этом числе есть одинаковые цифры");
    //  }
    //  else
    //  {
    //   console.log("В этом числе нет одинаковых цифер");
    //  }
    //  console.log(number + " -> " + thnumber+snumber+fnumber);
    
    //task_4
    //Запросить у пользователя год и проверить, високосный он
    //или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
    // const year = prompt("Введите год:");
    //if (year%400==0 || (year%4==0 && year%100!=0))
    //{
    //   alert(year + " это високосный год");    
    //}
    //else
    //{
    //  alert(year + " это не високосный год");
    //}
    
    //task_5
    //Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
    // var number1;
    // var number2;
    // var number4;
    // var number = Number(prompt("Введите пятизначное число!"));
    // if(number > 9999 && number < 100000)
    // {
    //   number1 = Math.trunc(number / 10000);
    //   number = number % 10000;
    //   number2 = Math.trunc(number / 1000);
    //   number = number % 1000;
    //   number = number % 100;
    //   number4 = Math.trunc(number / 10);
    //   number = number % 10;
    //   if(number1 == number && number2 == number4)
    //   {
    //     console.log("Палиндром");
    //   }
    //   else{
    //     console.log("Не палиндром");
    //   }
    // }
    // else{
    //   console.log("Не верное число");
    // }
    //task_6
    //Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести: EUR,
    //UAN илиAZN, и получает в ответ соответствующую сумму.
    // var usd = Number(prompt("Введите сумму"));
    // var switcher = Number(prompt("Выберите валюту 1 = EUR, 2 = RUB, 3 = CNY"));
    // switch(switcher){
    //     case 1: console.log(USD * 0.92 +" EUR"); break;
    //     case 2:console.log(USD * 80.5 + " RUB"); break;
    //     case 3:console.log(USD * 7.01 + " CNY"); break;
    //     default: console.log("Введены некорректные данные, попробуйте снова.");
    // }
    
    //task_7
    //Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300
    //до 500 – 5%, от 500 и выше – 7%. 
    // var sum = Number(prompt("Введите сумму"));
    // if(sum >= 200 && sum < 300){
    //     alert("Ваша сумма с учетом скидки = " + (sum - ((sum/100)*3)));
    // }
    // else if(sum >= 300 && sum < 500){
    //     alert("Ваша сумма с учетом скидки = " + (sum - ((sum/100)*5)));
    // }
    // else if(sum >= 500)
    // {
    //     alert("Ваша сумма с учетом скидки = " + (sum - ((sum/100)*7)));
    // }
    // else
    // {
    //     alert("Ваша сумма = " + sum);
    // }

    //task_8
    // Запросить у пользователя длину окружности и периметр
    //квадрата. Определить, может ли такая окружность поместиться в указанный квадрат. 
    // const circ_len = prompt("Enter circle length:");
    //const sqr_per = prompt("Enter square perimeter:");
    //const circ_diam = 2*(circ_len/(2 * Math.PI));
    //if(circ_diam <= (sqr_per/4))
    //{
    //    alert("Circle with such length CAN be placed inside such square");
    //}
    //else
    //{
    //    alert("Circle with such length CAN NOT be placed inside such square")
    //}

    //task_9
    //Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2
    //балла. После вопросов выведите пользователю количество набранных баллов.
    //var score = 0;
    //var n = 3;
    //while(+n)
    //{
    //    var fnumber = Math.floor(Math.random() * 10);
    //    var snumber = Math.floor(Math.random() * 10);
    //    var thnumber;
    //    switch(Math.floor(Math.random() * 3))
    //    {
    //        case 0:c = "*";break;
    //        case 1:c = "/";break;
    //        case 2:c = "+";break;
    //        case 3:c = "-";break;
    //    }
    //    var question = prompt("Сколько будет " + fnumber + " " + thnumber + " " + snumber + "?");
    //    var ansver;
    //    switch(thnumber)
    //    {
    //        case "*":ansver = fnumber*snumber;break;
    //         case "/":ansver = fnumber/snumber;break;
    //        case "+":ansver = fnumber+snumber;break;
    //        case "-":ansver = fnumber-snumber;break;
    //    }
    //    if(ansver == question) {alert("Ваш ответ правильный!"); score+=2;}
    //    else alert("Ваш ответ НЕ правильный!");
    //    n--;
    //}
    //alert("Вы набрали " + score + " баллов!");

    //DZ10
    //Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий
    //месяц, год, а также високосный год. 
    // var day = Number(prompt("Укажите день"));
    // var month = Number(prompt("Укажите месяц"));
    // var year = Number(prompt("Укажите год"));
    // var errorDate = false;
    // var longMonth = [1,3,5,7,8,10,12];
    // var shortMonth = [4,6,9,11];
    // errorDate = year > 0 && year <= 9998 ? false : true;
    // if (!errorDate)
    // {
    //     var leapYear = false;
    //     if (year % 4 == 0)
    //         if (year % 100 == 0)
    //             if (year % 400 == 0)
    //                 leapYear = true;
    //         else
    //             leapYear = true;
    // }

    // errorDate = month > 0 && month <= 12 ? false : true;
    // if (!errorDate) 
    // {   
    //     errorDate = day > 0 && day <= 31 && longMonth.includes(month) ? false : true;
    //     errorDate = day > 0 && day <= 30 && shortMonth.includes(month) ? false : true;
    //     if (leapYear)
    //     {
    //         errorDate = day > 0 && day <= 29 && month == 2  ? false : true;
    //     }
    //     else
    //     {
    //         errorDate = day > 0 && day <= 28 && month == 2 ? false : true;
    //     }     
    // }

    // day = day + 1;

    // if (day <= 31 && longMonth.includes(month) || 
    //     day <= 30 && shortMonth.includes(month) || 
    //     day <= 29 && month == 2 && leapYear ||  
    //     day <= 28 && month == 2)
    //     console.log (day + "." + month + "." + year);
    // else
    // {
    //     day = 1;
    //     month = month + 1;
    //     if (month <= 12)
    //     {
    //         console.log (day + "." + month + "." + year);
    //     }
    //     else
    //     {
    //         month = 1;
    //         year++;
    //         console.log (day + "." + month + "." + year);
    //     }
    // }
    
    
    
    
});
