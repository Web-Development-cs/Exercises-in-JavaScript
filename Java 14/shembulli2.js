window.alert("Welcome Quiz")
window.alert("Shuma e numrave 4 dhe 5 eshte:")
window.alert(" Shtyp: 0 per shumen 2")
window.alert(" Shtyp: 1 per shumen 3")
window.alert(" Shtyp: 2 per shumen 9")


answer = window.prompt("Shtypni një alternativë: (nga 0-2)")
y = answer;
answer +=1;
switch(y){
    case 0:
        y = "Pergjigjja e pasakte!";
        break;
    case 1:
        y = "Pergjigjja e pasakte!"
        break;
    case 2:
        y = "Pergjigjja e sakte!"
        break;

    default:
        alert("Nuk keni shtypur asnjë nga rastet 0 deri ne 2")
        break;
}
alert(y);