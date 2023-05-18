//1. Об’єкт “Бухгалтерія” (Код, ПІБ; посада; заробітна плата; кількість дітей;стаж).

/**
 * @param fullName ПІБ
 * @param position Посада
 * @param sallary Заробітна плата
 * @param childrenQuantity Кількість дітей
 * @param seniority Стаж
 * @return {getFullInformation()} Повна інформація про бухгалтера 
 */
function Accountant(fullName,position,sallary,childrenQuantity,seniority){
    this.fullName = fullName;
    this.position = position;
    this.sallary = sallary;
    this.childrenQuantity = childrenQuantity;
    this.seniority = seniority; 
}
Accountant.prototype.getFullInformation = function(){
    return "ПІБ: "+this.fullName+". Посада: "+this.position+". Заробітна плата: "+this.sallary+". Кількість дітей: "+this.childrenQuantity+". Стаж: "+this.seniority;
}
let accountant1 = new Accountant("Вогар Андрій Юрійович","Студент",0,0,"1 курс");
console.log(accountant1.getFullInformation());

//2. Об’єкт “ДАІ” (Код, ПІБ власника машини; марка, номер машини; колір.
/**
 * @param fullName ПІБ людини
 * @param autoName Марка машини
 * @param autoNumber Номер машини
 * @param autoColor Колір машини
 * @return {getFullInformation} Повна інформація про людину і машину
 */
 function DAI(fullName,autoName,autoNumber,autoColor){
    this.fullName = fullName;
    this.autoName = autoName;
    this.autoNumber = autoNumber;
    this.autoColor = autoColor; 
}
DAI.prototype.getFullInformation = function(){
    return "ПІБ: "+this.fullName+". Марка: "+this.autoName+". Номер машини: "+this.autoNumber+". Колір: "+this.autoColor;
};
let dai1 = new DAI("Вогар Андрій Юрійович","Ford Mustang","AO7799BC","Червоний");
console.log(dai1.getFullInformation());

//3. Об’єкт “Підприємство” (Код, назва підприємства; кількість співробітників; галузь; адреса).
/**
 * @param name Назва підприємства
 * @param quantityEmployees Кількість співробітників
 * @param branch Галузь
 * @param address Адреса
 * @return {getFullInformation} Повна інформація про людину і машину
 */
 function Company(name,quantityEmployees,branch,address){
    this.name = name;
    this.quantityEmployees = quantityEmployees;
    this.branch = branch;
    this.address = address; 
}
Company.prototype.getFullInformation = function(){
    return "Назва підприємства: "+this.name+". Кількість співробітників: "+this.quantityEmployees+". Галузь: "+this.branch+". Адреса: "+this.address;
};
let company1 = new Company("Вогар",1000000,"ІТ","м.Мукачево, вул.Духновича");
console.log(company1.getFullInformation());
