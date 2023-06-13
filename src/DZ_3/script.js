window.addEventListener("DOMContentLoaded", (event) => {
    //task_1
    //Подсчитать сумму всех чисел в заданном пользователем диапазоне. 
    //   var lower = Number(prompt("введите нижнюю границу диапазона"));
    //   var upper = Number(prompt("Введите верхний диапазон")); 
    //for(var i = (lower+1); i <= upper; i++)
    // {
    //    lower+=i;
    // }
    //console.log("Сумма чисел из вашего диапазона "+ lower);
    
//task_2
//Запросить 2 числа и найти только наибольший общий делитель.
// var firstnumb = Number(prompt("введите первое число"));
// var secondnumb = Number(prompt("введите второе число"));
// var GCD;
// while(firstnumb!=secondnumb){
//     if(firstnumb>secondnumb)
//     {
//         firstnumb = firstnumb - secondnumb;
//     }
//     else{
//         secondnumb = secondnumb - firstnumb;
//     }
// }
// GCD = firstnumb;
// console.log("наибольший общий делитель - "+ GCD);

    //task_3
    //Запросить у пользователя число и вывести все делители этого числа
    // var Devidenumb = Number(prompt("Введите число"));
    // for(var i = Devidenumb; i > 0; i--){
    // if((Devidenumb%i) == 0)
    //   {
    //     console.log("Делитель вашего числа " + i );
    //   }
    // }

    //task_4
    //Определить количество цифр в введенном числе.
	// var number = Number(prompt("Введите число: "));
	// var counter = 0;
	// while(number > 0){
	// 	number = Math.trunc(number / 10);
	// 	counter++;
	// }
	// console.log("В Вашем числе " + counter + " цифер");

    //task_5
    // Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных
    // и нулей. При этом также посчитать, сколько четных и нечетных. Вывести ста-тистику на экран. 
    // Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
    //var pos = 0;
    // var neg = 0;
    //var zero = 0;
    //var even = 0;
    //var odd =0;    
    //for (let i=1; i<=10; i++)
    //{
    //    let num = prompt("Enter " + i + " number:");
    //    if (num > 0)
    //    {
    //        pos++;
    //    }
    //    if(num < 0)
    //    {
    //        neg++;
    //    }
    //    if (num ==0)
    //    {
    //        zero++;
    //    }
    //    if (num%2 ==0)
    //    {
    //        even++;
    //    }
    //    if(num%2!==0)
    //    {
    //        odd++;
    //    }
    //};
    //alert("Statistics:\n Positive: " + pos + ";\n Negative: " + neg + ";\n Zero: " + zero + ";\n Even: " + even + ";\n Odd: " + odd);

    //task_6
    // Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести
    // результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.
    //do {
    //var num1 = +prompt("Enter first numner: ");
    //var num2 = +prompt("Enter second number: ");
    //var operation = prompt("Choose operation: + , - , * , / ");
    //switch (operation) {
    //    case "+":
    //        alert(num1 + num2);break;
    //    case "-":
    //        alert(num1 - num2); break;
    //    case "/":
    //        alert(num1 / num2);break;
    //    case "*":
    //        alert(num1 * num2);break;
    //    default: break;
    //}
    //}while (confirm("Repeat?"));

    //task_7
    //Запросить у пользователя число и на сколько цифр его
    //сдвинуть. Сдвинуть цифрычисла и вывести результат (если
    //число 123456 сдвинуть на 2 цифры, то получится 345612).
    // var number = prompt("Введите число");
    // var left = prompt("Введите число сдвига");
    // var massive = [];
    // if (left > number.length)
    //     left = left%number.length;    
    // for (var i = left; i < number.length; i++)
    // {
    //     massive.push(number[i]);
    // }
    // for (var i = 0; i < left; i++)
    // {
    //     massive.push(number[i]);
    // }
    // console.log(massive);

    //task_8
    //Зациклить вывод дней недели таким образом: «День недели.
    //Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK
    // var day = 0;
    // var next = true;
    // var text = "";
    // do 
    // {
    //     ++day;
    //     switch(day)
    //     {
    //         case 1: 
    //             text = "This is понедельник. Дальше?";  
    //             next = confirm(text);
    //             break;
    //         case 2: 
    //             text = "This is понедельник 2. Дальше?";  
    //             next = confirm(text);
    //             break;
    //         case 3: 
    //             text = "This is понедельник 3. Дальше?";  
    //             next = confirm(text);
    //             break;
    //         case 4: 
    //             text = "This is понедельник 4. Дальше?";  
    //             next = confirm(text);
    //             break;
    //         case 5: 
    //             text = "This is понедельник 5. Дальше?";  
    //             next = confirm(text);
    //             break;
    //         case 6: 
    //             text = "This is понедельник 6. Дальше?";  
    //             next = confirm(text);
    //             break;
    //         case 7: 
    //             text = "This is понедельник 7. Дальше?";  
    //             next = confirm(text);
    //             if (next) day = 0;
    //             break;           
    //     }
    // }
    // while(next)

    //task_9
    //Вывести таблицу умножения для всех чисел от 2 до 9.
    //Каждое число необходимо умножить на числа от 1 до 10
    // for(let i = 2; i <= 9; i++)
    // {
    //     for(let j = 1; j<=10;j++)
    //     {
    //         console.log(i + " X " + j + " = " + (i*j));
    //     }
    // }
    //for(let i = 1; i <= 10; i++)
    //{
    //    console.log(2 + " X " + i + " = " + (2*i) +"        "+ 3 + " X " + i + " = " + (3*i) +"        "+ 4 + " X " + i + " = " + (4*i) +"        "+ 5 + " X " + i + " = " + (5*i) +"        ");
    //}
    //for(let i = 1; i <= 10; i++)
    //{
    //    console.log(6 + " X " + i + " = " + (6*i) +"        "+ 7 + " X " + i + " = " + (7*i) +"        "+ 8 + " X " + i + " = " + (8*i) +"        "+ 9 + " X " + i + " = " + (9*i) +"        ");
    //}
    
    //task_10
    //Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом:
    //каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя
    //«Ваше число > N, < N или == N?». В зависимости от того что указал пользователь, уменьшаете диапазон. Начальный
    //диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили
    //диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.
    // alert("Загадай число from 0 to 100");
    // var answer = false;
    // var bottom = 0;
    // var top = 100;
    // while (!answer)
    // {
    //     if (confirm("Число больше "+ Math.trunc((top+bottom)/2) +"?"))
    //     {
    //         bottom = Math.trunc((top+bottom)/2)+1;
    //     }
    //     else if (confirm("Число меньше "+ Math.trunc((top+bottom)/2) +"?"))
    //     {
    //         top = Math.trunc((top+bottom)/2);
    //     }
    //     else 
    //     {
    //         alert("Ваше число "+Math.trunc((top+bottom)/2));
    //         answer = true;
    //     }
    // }
   

});
