// //Завдання 1. Дано масив, який містить оцінки студента з К предметів. Знайти середній бал студента і з’ясувати до якої категорії він відноситься (відмінник (всі оцінки відмінно), двійочник (має хоча би одну двійку), хорошист (оцінки добре і відмінно), трійочник (є хоча би одна трійка)).
// var marks = [];
// for(var i =0;i<3;i++){
//     marks[i] = Number(prompt("Введіть оцінку"));
// }
// var averageMark = 0;
// for(var i =0;i<3;i++){
//     averageMark +=marks[i];
// }
// averageMark /= 3;
// if(marks.includes(2) == true){
//     alert("Двійочник");
// } else if(marks.includes(3)){
//     alert("Трійочник");
// } else if(marks.includes(4)){
//     alert("Хорошист");
// } else{
//     alert("Відмінник")
// }

// //Завдання 2.
// let days = ["Понеділок","Вівторок","Середа","Четвер","П'ятниця","Субота","Неділя"];
// let clients = [];
// for(let i = 0; i<days.length;i++){
//     clients[i] = Number(prompt("Введіть кількість клієнтів у "+days[i]));
// }
// //номери днів, протягом яких кількість відвідувачів була меншою за 20
// let clientsLess20 = [];
// let j =0;
// for(let i = 0; i<days.length;i++){
//     if (clients[i]<20){
//         clientsLess20[j]=days[i];
//         j++;
//     }
// }
// for(let i =0; i<clientsLess20.length;i++){
//     document.writeln("Дeнь, коли кількість відвідувачів була меншою 20: "+ clientsLess20[i]);
// }
// //номери днів, коли кількість відвідувачів була мінімальною
// let clientsMin = days[clients.indexOf(Math.min(clients))];
// document.writeln("День, коли кількість відвідувачів мінімальною "+ clientsMin);
// //номери днів, коли кількість відвідувачів була максимальною
// let clientsMax = days[clients.indexOf(Math.max(clients))];
// document.writeln("День, коли кількість відвідувачів максимальною "+ clientsMax);
// //загальну кількість клієнтів у робочі дні
// let clientsWeekday = clients[0]+clients[1]+clients[2]+clients[3]+clients[4];
// document.writeln("Загальну кількість клієнтів у робочі дні "+ clientsWeekday);
// //кількість клієнтів днів на вихідних
// let clientsDayOff = clients[5]+clients[6];
// document.writeln("кількість клієнтів днів на вихідних "+ clientsDayOff);

// //ДЗавдання 3. Дано масив імен студентів,. З’ясувати скільки разів зустрічається вказане користувачем ім’я, наприклад «Юрій».
// let n = Number(prompt("Введіть Кількість імен"));
// let names = [];
// for(let i =0;i<n;i++){
//     names[i] = String(prompt("Введіть Ім'я"));
// }
// let name = String(prompt("Введіть ім'я, яке хочете знайти на зустрічання"));
// let quantity = 0;
// for(let i =0;i<n;i++){
//     if(names[i]== name){
//         quantity ++;
//     }
// }
// alert("Кількість ім'я: "+quantity);

//Завдання 4. Дано одновимірний масив, у якому зберігається певна виграшна сума (елементи заповнюються випадковим чином значеннями від -500 до 500). Користувач вибирає номер елементу, поки не відмовиться від подальшої гри, або не вибере всі елементи. Після кожного ходу показувати сумарний виграш. Кожен елемент можна вибирати тільки 1 раз. 
let totalWin = 0;
let numbers = [];
let prizeArr = [];
for(let i = 0; i < 100; i++){
    prizeArr[i] = Math.floor(Math.random() * 1000 - 500);
}
while (true){
    let number = prompt("Введіть номер ячейки від 0 до 100 (Якщо бажаєте вийти, то нажміть Скасувати): ");
    if(number === null){
        alert("Загальний виграш = "+totalWin);
        break;
    }
    else{
        if(numbers.indexOf(number) != -1){
            alert("Ця ячейка вже вибрана");
        }
        else{
            totalWin += prizeArr[number];
            numbers.push(number);
        }
        alert("Загальний виграш = "+totalWin);
    }
}