//Task 1. З клавіатури вводяться числа до тих пір, поки послідовність є монотонною (зростаючою або спадною).
let x0=Number(prompt("Enter number"));
let x1=Number(prompt("Enter number"));
let div = x1-x0;
let result = 2;
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

/*
//Task 2. Знайти суму цифр числа, що знаходяться між першою цифрою та останньою цифрою.
let num = Number(prompt("Enter number"));
let result = 0;
num = Math.floor(num/10);
while(`${num}`.length>1){
    console.log(num%10);
    result+=num%10;
    num = Math.floor(num/10);
}
alert(result);

//Task 4. Необхідно підсумовувати всі непарні цілі числа в діапазоні, який користувач введе з клавіатури.
let start = Number(prompt("Введіть початок діапазону")); 
let stop = Number(prompt("Введіть кінець діапазону"));
let result = 0;
if(start%2==0) start+=1;
for(start; start<stop; start+=2){
    result+=start;
}
alert(result);

//Task 5. Написати програму, яка показуватиме на екран квадрат числа, введеного користувачем. Користувач повинен сам вирішувати – вийти із програми або продовжити введення.
do{
    let num = Number(prompt("Enter number"));
    alert(num**2);
    let n = Number(prompt("Введіть, що ви хочете робити далі: \n 1 - залишитись в програмі \n 2 - вийти з програми"))
    if(n == 2) break;
}while(true)

//Task 30. З клавіатури вводяться числа і підсумовуються. Знайти кількість введених чисел, коли їхня сума перевищила 100.
let result = 0;
let i = 0;
while(i<100){
    i += Number(prompt("Enter number"));
    result++;
}
alert("Result = "+result);
*/