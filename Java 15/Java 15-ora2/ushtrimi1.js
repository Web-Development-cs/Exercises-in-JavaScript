
//Ndërtoni një kalkulator të thjeshtë.
const veprimi = window.prompt('Cilin nga veprimet matematikore doni të shfrytëzoni: ');
var numri1 = parseFloat(window.prompt('Shtypni numrin e parë: '));
var numri2 = parseFloat(window.prompt('Shtypni numrin e dytë: '));
var numri3 = parseFloat(window.prompt('Shtypni numrin e tretë: '));

let rezultati;

if(veprimi == '+'){
   rezultati = numri1 + numri2 + numri3;
}
else if(veprimi == '-'){
    rezultati = numri1 - numri2 - numri3;
}
else if(veprimi == '*'){
    rezultati = numri1 * numri2 * numri3;
}
else{
      rezultati = numri1/numri2/numri3;
}

document.writeln("Le te bejme kalkulimet: "+numri1 + veprimi + numri2 + veprimi 
                   + numri3 + " = "+rezultati+"<br>");
document.writeln("Pra rezultati i fituar eshte: " +rezultati);
