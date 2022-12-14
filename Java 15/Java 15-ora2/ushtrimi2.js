
//Ndërtoni një kalkulator të thjeshtë duke shfrytëzuar switch case statement?

const veprimi = window.prompt('Cilin nga veprimet matematikore doni të shfrytëzoni: ');
var numri1 = parseFloat(window.prompt('Shtypni numrin e parë: '));
var numri2 = parseFloat(window.prompt('Shtypni numrin e dytë: '));
var numri3 = parseFloat(window.prompt('Shtypni numrin e tretë: '));

let rezultati;

switch(veprimi){
    case '+':
        rezultati = numri1 + numri2 + numri3;
        break;
    case '-':
        rezultati = numri1 - numri2 - numri3;
        break;
    case '*':
        rezultati = numri1 * numri2 * numri3;
        break;
    case '/':
        rezultati = numri1 / numri2 / numri3;
        break;
    case '%':
        rezultati = numri1 % numri2 % numri3;
        break;
    default:
        alert("Ky veprim matematikor nuk eshte ne kalkulator!")
}

document.writeln("Le te bejme kalkulimet: "+numri1 + veprimi + numri2 + veprimi 
                   + numri3 + " = "+rezultati+"<br>");
document.writeln("Pra rezultati i fituar eshte: " +rezultati);