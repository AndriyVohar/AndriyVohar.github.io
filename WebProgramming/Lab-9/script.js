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

//========================
var companies1 = new Companies();

function Click(){
    let name = String(document.getElementById("name").value);
    let quantityEmployees = Number(document.getElementById("employees").value);
    let branch = String(document.getElementById("branch").value);
    let address = String(document.getElementById("address").value);
    companies1.addCompany(new Company(name,quantityEmployees,branch,address));
}

function SubmitFindByCode(){
    let value = Number(document.getElementById("findByCode").value);
    let code = companies1.findInfoByCode(value);
    let info = document.getElementById("infoByCode");
    if (code) {
        info.innerHTML = `
            <div class="film">
                <p>Назва підприємства: ${code.name}</p>
                <p>Кількість працівників: ${code.quantityEmployees}</p>
                <p>Галузь: ${code.branch}</p>
                <p>Адреса: ${code.address}</p>
            </div>
            `;
    } else {
        console.log("Film not found");
    }
}

function SubmitFindByBranch(){
    console.log("OK");
    let value = String(document.getElementById("findByBranch").value);
    let code = companies1.findCompaniesWithPosition(value);
    let info = document.getElementById("infoByBranch");
    if (code) {
        code.forEach(element => {
            info.innerHTML += `
            <div class="companies">
                <p>Назва підприємства: ${element.name}</p>
                <p>Кількість працівників: ${element.quantityEmployees}</p>
                <p>Галузь: ${element.branch}</p>
                <p>Адреса: ${element.address}</p>
            </div>
            `;    
        });
    } else {
        console.log("Film not found");
    }
}

function Edited(){
    let value = Number(document.getElementById("editByCode").value);
    let nameOfParam = String(document.getElementById("editByName").value);
    let newOption = String(document.getElementById("editToInfo").value);
    let code = companies1.findInfoByCode(value);
    companies1.editCompany(value,nameOfParam,newOption);
    let info = document.getElementById("editedCompany");
    if (code) {
        info.innerHTML = `
            <div class="companies">
                <p>Назва підприємства: ${code.name}</p>
                <p>Кількість працівників: ${code.quantityEmployees}</p>
                <p>Галузь: ${code.branch}</p>
                <p>Адреса: ${code.address}</p>
            </div>
            `;
    } else {
        console.log("Film not found");
    }
}

function Deleted(){
    let value = Number(document.getElementById("deleteByNumber").value);
    companies1.deleteCompany(value);
    let code = companies1.findInfoByCode(value);
    let info = document.getElementById("deleteCompany");
    if (code) {
        info.innerHTML = `
            <div class="companies">
                <p>Назва підприємства: ${code.name}</p>
                <p>Кількість працівників: ${code.quantityEmployees}</p>
                <p>Галузь: ${code.branch}</p>
                <p>Адреса: ${code.address}</p>
            </div>
            `;
    } else {
        console.log("Film not found");
    }
}