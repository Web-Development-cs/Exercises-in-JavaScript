function shuma(x,y){
   var b = x+y;
 return b;
}
let rezultati = shuma(5,6);

function shumezimi(x,y){
  var b = x*y;
return b;
}
let rez = shumezimi(5,6);

function modulimi(x,y){
  var b = x%y;
return b;
}
let result = modulimi(50,6);

function fuqia(x,y){
  var b = x**y;
return b;
}
let end = fuqia(2,8);

document.write('Funksioni shuma(5,6) kthen si rezultat: '+rezultati);
document.write('<br>');
document.write('Funksioni shumezimi(5,6) kthen si rezultat: '+rez);
document.write('<br>');
document.write('Funksioni modulimi(50,6) kthen si rezultat: '+result);
document.write('<br>');
document.write('Funksioni fuqia(2,8) kthen si rezultat: '+end);
document.write('<br>');

window.alert('Operatoret Aritmetike');
window.prompt('Shkruani emrin tuaj: ');