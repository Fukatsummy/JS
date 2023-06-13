window.addEventListener("DOMContentLoaded", (event) => {
    /*//task_1
    let f = prompt("Введите первое число");
    let s = prompt("Введите второе число");
    let a = Сomparison(f,s);
    alert(a);*/

    /*//task_2
    let n = prompt("Введите число");
    alert(factorial(n));*/

    /*//task_3
    let f = prompt("Введите первое число");
    let s = prompt("Введите второе число");
    let t = prompt("Введите третье число");
    alert(combination(f,s,t));*/

    /*//task_4
    let f = prompt("Введите длину стороны квадрата");
    alert( "S = " + Square(f));
    
    let f = prompt("Введите длину");
    let s = prompt("Введите ширину");
    alert( "S = " + Square(f,s));*/

    /*//task_5
    let f = prompt("Введите число");
    if(perfectNumber(f))alert("Это идеальное число");
    else alert("Это не идеальное число.");*/

    /*//task_6
     let f = prompt("Введите первое число диапазона");
    let s = prompt("Введите конечное число диапазона");
    let n = perfectNumberS(f,s);
    if(n.length == 0)alert("Идеальных чисел нет");
    else alert(n);*/

    /*//task_7
    TimeOnBoard(10);*/

    /*//task_8
     TimeOnBoardInSec(15);*/

     /*//task_9
     TimeConverter(9802);*/

     /*//task_10
      alert(TimeComparison("23:19:30", "15:20:30"));*/

});

//task_1
//Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
/*function Сomparison( first, second)
{
    if(first == second)return 0;
    return (first > second) ? 1 : -1;
}*/

//task__2
//Написать функцию, которая вычисляет факториал переданного ей числа.
/*function factorial(n)
{
    if(n == 1)return 1;
    else return n*factorial(n - 1);
}*/

//task_3
//Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.
/*function combination(a,b,c)
{
    return a + b + c;
}*/

//task_4
//Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию
//передали 1 параметр, то она вычисляет площадь квадрата.
/*function Square(a, b=0)
{
    return (b == 0)? a*2 : a*b;
}*/

//task_5
//Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.
/*function perfectNumber(n)
{
    for(let i = 0; i < superNumbers.length-1; i++)
    if(n == superNumbers[i])return 1;
    return 0;
};*/

//task_6
//Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только
//те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать,совершенное число или нет
/*function perfectNumberS(f,s)
{
    let numbers = [];
    for(f; f < s; f++)
        for(let i = 0; i < superNumbers.length-1; i++)
        if(f == superNumbers[i])numbers.push(f);
    return numbers;
}*/

//task_7
//Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».
//Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
/*function TimeOnBoard(hh,mm = "00",ss = "00")
{
    if(hh>23 || hh < 0 || mm >59 || mm <0 || ss>59 || ss< 0)return 0;
    else 
    {
        let f = new Date("2000-01-01T"+ hh +":"+ mm + ":" + ss + ".000Z");
        alert( f.toLocaleTimeString());
    }
}*/

//task_8
//Написать функцию, которая принимает часы, минуты исекунды и возвращает это время в секундах.
/*function TimeOnBoardInSec(hh,mm = "00",ss = "00")
{
    if(hh>23 || hh < 0 || mm >59 || mm <0 || ss>59 || ss< 0)return 0;
    else 
    {
        let f = new Date("2000-01-01T"+ hh +":"+ mm + ":" + ss + ".000Z");
        const seconds = f.getHours() * 3600 + f.getMinutes() * 60 + f.getSeconds();
        return seconds;
    }
}*/

//task_9
//Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
/*function TimeConverter(t)
{
    let hours = Math.floor(t / 60 / 60);
    let minutes = Math.floor(t / 60) - (hours * 60);
    let seconds = t % 60;
    return hours + ":" + minutes + ":" + seconds;
}*/

//task_10
//Написать функцию, которая считает разницу между датами.Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При
//выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс».
/*function TimeComparison(firstTime, secondTime)
{
    let ft = firstTime.split(":");
    let st = secondTime.split(":");
    return TimeConverter(TimeOnBoardInSec(ft[0],ft[1],ft[2]) - TimeOnBoardInSec(st[0],st[1],st[2]));
}*/