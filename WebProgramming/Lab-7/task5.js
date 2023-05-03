let form = document.getElementById("form");
let collection = form.getElementsByTagName("input");
function test(){
    let randomNum1 = Number(Math.floor(Math.random()*10));
    let randomNum2 = Number(Math.floor(Math.random()*10));
    collection[0].value = randomNum1;
    collection[1].value = randomNum2;
}
function onClick(){
    let correctAnswer = Number(collection[0].value)+Number(collection[1].value);
    let answer = Number(collection[2].value);
    if(answer==correctAnswer){
        document.getElementById("result").innerHTML = "Ok";
    } 
    else{
        document.getElementById("result").innerHTML = "Not Ok";
    }
}