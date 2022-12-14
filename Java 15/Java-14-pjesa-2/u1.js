
window.alert("Welcome to our quiz!")
var answer = prompt("Prodhimi i numrave 5 dhe 3");
//parseInt()
var x = parseInt(answer)
switch(x){
  case 15:
    alert("Pergjigja e sakte!");
    break;
  default:
    alert("Wrong Answer");
}

var answer2 = prompt("Shuma e numrave 5 dhe 3");
//parseInt()
var y = parseInt(answer2)
switch(y){
    case 0:
        alert("Pergjigja e pasakte!");
        break;
    case 8:
    alert("Pergjigja e sakte!");
    break;
  default:
    alert("Wrong Answer");
}