// // Задача 2. Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.
// function getSeazon(n){
//     let a = "";
//     if(0<n<3) a = "Winter"
//     else if (2<n<6) a = "Spring"
//     else if (5<n<9) a = "Summer"
//     else if (8<n<12) a = "Autumn"
//     return a;
// }
// var getSeazonAnonymus = function(n){
//     let a = "";
//     if(0<n<3) a = "Winter"
//     else if (2<n<6) a = "Spring"
//     else if (5<n<9) a = "Summer"
//     else if (8<n<12) a = "Autumn"
//     return a;
// }
// var getSeazonLambda = (n)=>{
//     let a = "";
//     if(0<n<3) a = "Winter"
//     else if (2<n<6) a = "Spring"
//     else if (5<n<9) a = "Summer"
//     else if (8<n<12) a = "Autumn"
//     return a;
// }
// var n = Number(prompt("Enter number of month: "));
// alert("Function: "+ getSeazon(n));
// alert("Function Anonymus: " + getSeazonAnonymus(n));
// alert("Function Lambda: "+ getSeazonLambda(n));

// //Завдання 3.Створити функцію, яка для 4 чисел знаходить добуток;
// function getMultiplication(a,b,c,d){
//     return a*b*c*d;
// }
// var getMultiplicationAnonymus = function(a,b,c,d){
//     return a*b*c*d;
// }
// var getMultiplicationLambda = (a,b,c,d) => a*b*c*d;
// var a = prompt("Введіть число A");
// var b = prompt("Введіть число B");
// var c = prompt("Введіть число C");
// var d = prompt("Введіть число D");
// alert("Function: "+ getMultiplication(a,b,c,d));
// alert("Function Anonymus: " + getMultiplicationAnonymus(a,b,c,d));
// alert("Function Lambda: "+ getMultiplicationLambda(a,b,c,d));

//Задача 4. Створити функцію, яка випадковим чиномвиводить на екран одне із зображень (шляхи до зображень передаються у функцію як аргументи)
var n = Number(prompt("Введіть Кількість зображень"));
var a = []
for(var i = 0; i<n; i++){
    a[i] = prompt("Введіть посилання на картинку яку бажаєте додати"); 
}
function RandomImage(a){
    return `
        <img src = "${a[Math.floor(Math.random()*a.length)]}">
    `
}
var RandomImageAnonymus = function(){
    return `
        <img src = "${a[Math.floor(Math.random()*a.length)]}">
    `
}
document.write(RandomImage(a));
// document.write(RandomImageAnonymus(a));

// //Завдання 7. Створити функцію, яка переводить сантиметри у дюйми;
// var cm = prompt("Введіть сантиметр");
// function cmToIn(a){
//     return a*0.393700;
// }
// var cmToInAnonymus = function (a){
//     return a*0.393700;
// }
// var cmToInLambda = (a)=> a*0.393700;
// alert("Function: "+ cmToIn(cm));
// alert("Function Anonymus: " + cmToInAnonymus(cm));
// alert("Function Lambda: "+ cmToInLambda);
