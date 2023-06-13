window.addEventListener("DOMContentLoaded", (event)=> {

     /*Task 1
   console.log(power(3,3));*/

   /*Task 2
   console.log(gcd(20,100));*/

   /*Task 3
   console.log(maxDigit(109823478210));*/

   /*Task 4 
  console.log(isPrime(77));*/

  /*Task 5
  console.log(primeFactors(5676));*/

  /*Task 6*/
  console.log(fibonacci(77))

});

//Написать функцию возведения числа в степень.
/*function power(base, exp) {
    return Math.pow(base, exp);
    }*/

    //Написать функцию поиска наибольшего общего делителя.
    /*function gcd(num1, num2) {
    if (num2 === 0) {
    return num1;
    } else {
    return gcd(num2, num1 % num2);
    }
    }*/
    
    //Написатьфункцию для поиска максимальной цифры в числе.
    /*function maxDigit(num) {
    var arr = num.toString().split('');
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
    if (Number(arr[i]) > max) {
    max = Number(arr[i]);
    }
    }
    return max;
    }*/
    
    //Написать функцию, которая определяет простое ли переданное число.
    /*function isPrime(num) {
    if (num === 2 || num === 3) {
    return true;
    } else if (num === 1 || num % 2 === 0) {
    return false;
    } else {
    for (var i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
    return false;
    }
    }
    return true;
    }
    }*/
    
    //Написать функцию для вывода всех множителей переданного числа в возрастающем порядке.
    //Например: число 18 – множители 2 * 3 * 3.
    /*function primeFactors(num) {
    var arr = [];
    for (var i = 2; i <= num; i++) {
    while (num % i === 0 && isPrime(i)) {
    arr.push(i);
    num /= i;
    }
    }
    return arr;
    }*/
    
    function fibonacci(num) {
    if (num <= 2) {
    return 1;
    } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
    }
    }