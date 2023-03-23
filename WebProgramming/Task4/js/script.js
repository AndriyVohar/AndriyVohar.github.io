//Task 1. З клавіатури вводяться числа до тих пір, поки послідовність є монотонною (зростаючою або спадною).
var x0=Number(prompt("Enter number"));
var x1=Number(prompt("Enter number"));
var div = x1-x0;
var result = 2;
do{
    x0 = Number(prompt("Enter number"));
    if(x0-x1 == div){
        x1=x0;
        result++;
    }else{
        break;
    }
}while(true)
alert("Result = "+result);


//Task 2. Знайти суму цифр числа, що знаходяться між першою цифрою та останньою цифрою.
var num = Number(prompt("Enter number"));
var result = 0;
num = Math.floor(num/10);
while(`${num}`.length>1){
    result+=num%10;
    num = Math.floor(num/10);
}
alert(result);

//Task 4. Необхідно підсумовувати всі непарні цілі числа в діапазоні, який користувач введе з клавіатури.
var start = Number(prompt("Введіть початок діапазону")); 
var stop = Number(prompt("Введіть кінець діапазону"));
var result = 0;
if(start%2==0) start+=1;
for(start; start<stop; start+=2){
    result+=start;
}
alert(result);

//Task 6. Написати програму, яка показуватиме на екран квадрат числа, введеного користувачем. Користувач повинен сам вирішувати – вийти із програми або продовжити введення.
do{
    var num = Number(prompt("Enter number"));
    alert(num**2);
    var n = Number(prompt("Введіть, що ви хочете робити далі: \n 1 - залишитись в програмі \n 2 - вийти з програми"))
    if(n == 2) break;
}while(true)

//Task 30. З клавіатури вводяться числа і підсумовуються. Знайти кількість введених чисел, коли їхня сума перевищила 100.
var result = 0;
var i = 0;
while(i<100){
    i += Number(prompt("Enter number"));
    result++;
}
alert("Result = "+result);
