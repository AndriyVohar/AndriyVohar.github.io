// // Завдання 2. Створити функцію, яка за назвою дня тижня повертає список пар на цей день.
// var nameDay = String(prompt("Введіть день тижня (Наприклад: Понеділок)"));
// nameDay = nameDay.toLowerCase();
// function lessons(){
//     switch(nameDay){
//         case "понеділок": return "Математичний аналіз,\n Дискретна математика,\n Програмуваня C#";
//             break;
//         case "вівторок": return "Алгебра,\n Дискретна математика,\n Алгебра";
//             break;
//         case "середа": return "Англійська мова,\n Англійська мова,\n Програмуваня C#";
//             break;
//         case "четвер": return "Управління ІТ,\n Управління ІТ,\n Веб програмування";
//             break;
//         case "п'ятниця": return "Математичний аналіз, \n Програмуваня C#";
//             break;
//         default: return "Пар нема";
//     }
// }
// let lessonsAnonymus = function(){
//     switch(nameDay){
//         case "понеділок": return "Математичний аналіз,\n Дискретна математика,\n Програмуваня C#";
//             break;
//         case "вівторок": return "Алгебра,\n Дискретна математика,\n Алгебра";
//             break;
//         case "середа": return "Англійська мова,\n Англійська мова,\n Програмуваня C#";
//             break;
//         case "четвер": return "Управління ІТ,\n Управління ІТ,\n Веб програмування";
//             break;
//         case "п'ятниця": return "Математичний аналіз, \n Програмуваня C#";
//             break;
//         default: return "Пар нема";
//     }
// }
// let lessonsLambda = (nameDay) => {
//     switch(nameDay){
//         case "понеділок": return "Математичний аналіз,\n Дискретна математика,\n Програмуваня C#";
//             break;
//         case "вівторок": return "Алгебра,\n Дискретна математика,\n Алгебра";
//             break;
//         case "середа": return "Англійська мова,\n Англійська мова,\n Програмуваня C#";
//             break;
//         case "четвер": return "Управління ІТ,\n Управління ІТ,\n Веб програмування";
//             break;
//         case "п'ятниця": return "Математичний аналіз, \n Програмуваня C#";
//             break;
//         default: return "Пар нема";
//     }
// }
// alert("Standart function: "+lessons());
// alert("Anonymus function: "+lessons());
// alert("Lambda function: "+lessons());

//Завдання 3. Дано послідовність чисел, які згенеровано випадковим чином. Сформувати новий масив, з чисел, які є більшими за перший елемент.
let massive = [];
for(let i = 0; i<10; i++){
    massive[i] = Math.floor(Math.random()*100);
}
alert("Array: "+massive);
// let newMassive = [];
// let j =0;
// for(let i=0;i<10;i++){
//     if(massive[i]>massive[0]){
//         newMassive[j] = massive[i];
//         j++;
//     }
// }
alert(massive.filter(v => v > massive[0]));