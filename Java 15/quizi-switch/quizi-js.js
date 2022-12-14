
window.alert("Welcome to our quiz!")
//var answer = 15;
let piket = 0;
let pytja = 0;
var question1 = window.prompt("Metoda per shtypjen e te dhenave si input ne JS eshte:\nA. alert()\nB. prompt()\nC. getDay()\nD. getDate()")
switch(question1.toUpperCase()){
  case "A":
    alert("Pergjigjja e pasakte!");
    break;
  case "B":
    alert("Pergjigjja e sakte!");
    piket += 10;
    pytja += 1;
    break;
  case "C":
    alert("Pergjigjja e pasakte!");
    break;
  case "D":
    alert("Pergjigjja e pasakte!");
    break;    
  default:
    alert("Wrong Answer");
    break;
}

window.alert("Pytjet e sakta: "+pytjet+ ". Piket: "+piket)
