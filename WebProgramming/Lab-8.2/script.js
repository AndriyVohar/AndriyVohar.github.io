//1. Об’єкт “Бухгалтерія” (Код, ПІБ; посада; заробітна плата; кількість дітей;стаж).
class Accountant{
    constructor(fullName,position,sallary,childrenQuantity,seniority){
        this.fullName = fullName;
        this.position = position;
        this.sallary = sallary;
        this.childrenQuantity = childrenQuantity;
        this.seniority = seniority; 
    }

}
class Accountants{
    constructor(){
        this.accountants = [];
    }
    // додавання одного об’єкту
    addAccountant(object){
        if(object instanceof Accountant){
            this.accountants.push(object);
        }
    }
    // додавання колекції об’єктів
    addAccountants(object){
        object.forEach(element => {
            this.addAccountant(element);
        });
    }
    // отримання інформації щодо одного об’єкту (за Кодом)
    findInfoByCode(index){
        return this.accountants[index];
    }
    // отримання вибірки з колекції згідно з вказаними запитами
    findAccountantsWithPosition(position) {
        return this.accountants.filter(accountant => accountant.position === position);
    }
    // редагування інформації  про вказаний об’єкт
    editAccountant(index, nameOfParam, newOption){
        let accountant = this.findInfoByCode(index);
        switch(nameOfParam.toLowerCase()){
            case "піб": accountant.fullName = newOption; break;
            case "посада": accountant.position = newOption; break;
            case "заробітна плата": accountant.sallary = newOption; break;
            case "кількість дітей": accountant.childrenQuantity = newOption; break;
            case "стаж": accountant.seniority = newOption; break;
        }
    }
    // видалення інформації про вказаний об’єкт
    deleteAccountant(index){
        this.accountants.splice(index,1);
    }
}

//Приклад використання
let accountant1 = new Accountants();
accountant1.addAccountant(new Accountant("Глуханич Станіслав","Студент",0,0,"1 курс"));
accountant1.addAccountants([new Accountant("Вогар Андрій Юрійович","Студент",0,0,"1 курс"),new Accountant("Гриценко Віктор Тарасович","Грузчик",0,0,"1 клас")]);
console.log(accountant1.findInfoByCode(1));
console.log(accountant1.findAccountantsWithPosition("Студент"));
accountant1.editAccountant(2, "Посада","Студент");
accountant1.editAccountant(2, "Стаж", "1 курс");
console.log(accountant1.findInfoByCode(2));
accountant1.deleteAccountant(2);
console.log(accountant1.accountants);


//2. Об’єкт “ДАІ” (Код, ПІБ власника машини; марка, номер машини; колір.
class DAI{
    constructor(fullName,autoName,autoNumber,autoColor){
        this.fullName = fullName;
        this.autoName = autoName;
        this.autoNumber = autoNumber;
        this.autoColor = autoColor; 
    }
}
class DAIs{
    constructor(){
        this.dais = [];
    }
    // додавання одного об’єкту
    addDAI(object){
        if(object instanceof DAI){
            this.dais.push(object);
        }
    }
    // додавання колекції об’єктів
    addDAIs(object){
        object.forEach(element => {
            this.addDAI(element);
        });
    }
    // отримання інформації щодо одного об’єкту (за Кодом)
    findInfoByCode(index){
        return this.dais[index];
    }
    // отримання вибірки з колекції згідно з вказаними запитами
    findDAIsWithPosition(autoColor) {
        return this.dais.filter(dai => dai.autoColor === autoColor);
    }
    // редагування інформації  про вказаний об’єкт
    editDAI(index, nameOfParam, newOption){
        let dai = this.findInfoByCode(index);
        switch(nameOfParam.toLowerCase()){
            case "піб": dai.fullName = newOption; break;
            case "марка": dai.autoName = newOption; break;
            case "номер машини": dai.autoNumber = newOption; break;
            case "колір": dai.autoNumber = newOption; break;
        }
    }
    // видалення інформації про вказаний об’єкт
    deleteDAI(index){
        this.dais.splice(index,1);
    }
}

//Приклад використання
let dai = new DAIs();
dai.addDAI(new DAI("Вогар Андрій Юрійович","Ford Mustang","AO7799BC","Червоний"));
dai.addDAIs([
    new DAI("Гриценко Віктор Тарасович","Жигулі","AO7789BC","Червоний"),
    new DAI("Новікова Руслана Вікторівна","Chevrolet","AO7899BC","Чорний")
]);
console.log(dai.findInfoByCode(1));
console.log(dai.findDAIsWithPosition("Червоний"));
dai.editDAI(1,"марка","Volkswagen");
dai.editDAI(1, "номер машини", "АО1234ВХ");
console.log(dai.findInfoByCode(1));
dai.deleteDAI(1);
console.log(dai.dais);


//3. Об’єкт “Підприємство” (Код, назва підприємства; кількість співробітників; галузь; адреса).
class Company {
    constructor(name, quantityEmployees, branch, address) {
        this.name = name;
        this.quantityEmployees = quantityEmployees;
        this.branch = branch;
        this.address = address; 
    }
}
class Companies {
    constructor() {
        this.companies = [];
    }
    // додавання одного об’єкту
    addCompany(object) {
        if(object instanceof Company) {
            this.companies.push(object);
        }
    }
    // додавання колекції об’єктів
    addCompanies(object) {
        object.forEach(element => {
            this.addCompany(element);
        });
    }
    // отримання інформації щодо одного об’єкту (за Кодом)
    findInfoByCode(index) {
        return this.companies[index];
    }
    // отримання вибірки з колекції згідно з вказаними запитами
    findCompaniesWithPosition(branch) {
        return this.companies.filter(company => company.branch === branch);
    }
    // редагування інформації  про вказаний об’єкт
    editCompany(index, nameOfParam, newOption) {
        let company = this.findInfoByCode(index);
        switch(nameOfParam.toLowerCase()){
            case "назва":
                company.name = newOption;
                break;
            case "кількість працівників":
                company.quantityEmployees = newOption;
                break;
            case "галузь":
                company.branch = newOption;
                break;
            case "адреса":
                company.address = newOption;
                break;
        }
    }
    // видалення інформації про вказаний об’єкт
    deleteCompany(index) {
        this.companies.splice(index, 1);
    }
}

//Приклад використання
let comp = new Companies();
comp.addCompany(new Company("Вогар", 1000000, "ІТ", "Мукачево"));
comp.addCompanies([
    new Company("Гриценко", 30000, "ФК", "Ужгород"),
    new Company("Галь", 20000000, "ІТ", "Ужгород")
]);
console.log(comp.findInfoByCode(1));
console.log(comp.findCompaniesWithPosition("ІТ"));
comp.editCompany(1, "кількість працівників", 20000);
comp.editCompany(1, "адреса", "Мукачево");
console.log(comp.findInfoByCode(1));
comp.deleteCompany(1);
console.log(comp.companies);