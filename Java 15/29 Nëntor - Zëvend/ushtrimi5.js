
window.alert("Welcome to our quiz!")
//var answer = 15;
let piket = 0;
let pytja = 0;
var question1 = window.prompt("Metoda per shtypjen e te dhenave si input ne JS eshte:\na. alert()\nb. prompt()\nc. getDay()\nd. getDate()")
switch(question1.toLowerCase()){
  case "a":
    alert("Pergjigjja e pasakte!");
    break;
  case "b":
    alert("Pergjigjja e sakte!");
    piket += 10;
    pytja += 1;
    break;
  case "c":
    alert("Pergjigjja e pasakte!");
    break;
  case "d":
    alert("Pergjigjja e pasakte!");
    break;    
  default:
    alert("Wrong Answer");
    break;
}

var question2 = window.prompt("Metoda per gjatesine e vargut ne JS eshte:\na. alert()\nb. prompt()\nc. length()\nd. length")
switch(question2.toLowerCase()){
  case "a":
    alert("Pergjigjja e pasakte!");
    break;
  case "b":
    alert("Pergjigjja e pasakte!");
    break;
  case "c":
    alert("Pergjigjja e pasakte!");
    break;
  case "d":
    alert("Pergjigjja e sakte!");
    piket += 10;
    pytja += 1;
    break;    
  default:
    alert("Wrong Answer");
    break;
}

var question3 = window.prompt("Si i shtojme elementet ne varg ne rastin kur vargu eshte i padefinuar:\na. varg[pozita] = emri_i_elementit\nb. varg[0]=hi\nc. length()\nd. length")
switch(question3.toLowerCase()){
  case "a":
    alert("Pergjigjja e sakte!");
    piket += 10;
    pytja += 1;
    break;
  case "b":
    alert("Pergjigjja e pasakte!");
    break;
  case "c":
    alert("Pergjigjja e pasakte!");
    break;
  case "d":
    alert("Pergjigjja e pasakte!");
    break;    
  default:
    alert("Wrong Answer");
    break;
}

window.alert("Pytjet e sakta: "+pytja+ ". Piket: "+piket)
