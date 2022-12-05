
window.alert("Welcome to our quiz!")
//var answer = 15;
 var question1 = prompt("Prodhimi i numrave 5 dhe 3\nA. 15\nB. 10\nC. 11\nD. 3 ")
 var vlera_e_fituar = question1.toUpperCase();
switch(vlera_e_fituar){
/*
  case 0:
     solution = "Pergjijja e pasakte"
     break;
  case 1:
    solution = "Pergjigjja e pasakte"
    break;
*/
  case A:
    alert("Pergjigjja e sakte!");
    break;
  case B:
    alert("Pergjigjja e pasakte!");
    break;
  case C:
    alert("Pergjigjja e pasakte!");
    break;
  case D:
    alert("Pergjigjja e pasakte!");
    break;    
  default:
    alert("Wrong Answer");
}
