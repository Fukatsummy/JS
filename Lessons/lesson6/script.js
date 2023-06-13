window.addEventListener("DOMContentLoaded", (event) => {
    //console.log(FactorialRecursive(5));//факториал заданного числа Task 1
    //OutputInRangeDesc(2,10);   Task 2
    //OutputInRangeAsc(2,10);    Task 2
   // console.lod(ReverseOutput(2345)); task 3  
   //console.log(SumNumber(123));  Task 4
   //console.log(PairRoundBrackets(4)); Task 5

   //console.log( NumberPow(2,3));dz1
   //console.log(MaxDivider(5, 10));dz2
   //console.log(FindMaxDigit(12));dz3
   //console.log(GetMassivePrimeMultiply(5577));dz5
});
//факториал заданого числа Task 1
function FactorialRecursive(number, result = 1)
{
    if (number == 0)
    {
       return result;
    } 
    else
    {
        result = number * FactorialRecursive(number-1, result) ;
       return result;
    } 
}
//функция которая выводит числа в заданом порядке диапазона.  Task  2
function OutputInRangeDesc (min, max)
{
    if(min == max)
    {
        console.log(max);
        return;
    }
    console.log(max);
    OutputInRangeDesc(min, max-1);

}
function OutputInRangeAsc (min, max)
{
    if(min == max)
    {
        console.log(min);
        return;
    }
    console.log(min);
    OutputInRangeAsc(min+1, max);
}
// Task 3
function ReverseOutput(number)  //Task3
{
    number = number.toString();
    if(number.length > 0 )
    { return Number(number.substring(number.length-1) + 
        ReverseOutput(number.substring(0,number.length-1)));}
    else{return "";}
}
//которая считает сумму цифр числа// task 4
function SumNumber(number)
{
    if(number <= 0)
        return 0;
    return number % 10 + SumNumber(Math.trunc(number / 10));
}

function PairRoundBrackets(number)  //task 5
{
    if(number == 0)
        return "";
    return "(" + PairRoundBrackets(number -1) + ")";
}

// задачи из домашек
//возведение числа в степень используя рекурсию  dz1
function NumberPow(number, pow)
{
    if(pow ==1)
         return number;
return number * (NumberPow(number, pow-1));
}
//наибольший общий делитель dz2
function MaxDivider(number1, number2, start = 1, limit = 0, divider = 1)
{
    if(number1 == 0 || number2 == 0) return 0;
    
    if(limit == 0){
        if(number1 < number2)
        {
             limit = number1;
        } else{
            limit = number2;
        }
    }
    if(start > limit) return divider;
    if (number1 % start == 0 && number2 % start == 0) divider = start;
    return  MaxDivider(number1, number2, ++start,limit, divider);
}
//найти максимальную цифру в числе  dz3
function FindMaxDigit(number)
{
    if(number == 0) return 0;
    let digit = number % 10;
    let recDigit = FindMaxDigit(Math.trunc(number/10));
    if(recDigit > digit){
        return recDigit;
    }else{
       return digit;
    }  
}
 function GetMassivePrimeMultiply(number) //dz 5
 {
    prime = true;
    for(let i =2; i <= number; i++)
    {
        
        if(number % i == 0)
        {
            prime = false;
            return i + " * " + GetMassivePrimeMultiply(number / i);
        } 
    }
    if(prime)
       return number;
 }