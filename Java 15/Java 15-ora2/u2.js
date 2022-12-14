//Ndërtoni një kalkulator të thjeshtë duke 
//shfrytëzuar switch case statement?
var veprimi = window.prompt("Zgjedhni veprimin matematikor: ");
let numri1 = parseFloat(window.prompt("Numri 1 ka vleren: "));
let numri2 = parseFloat(window.prompt("Numri 2 ka vleren: "));
var ans;

switch(veprimi){
 case '+' :
    ans = numri1 + numri2;
    break;
 case '-':
    ans = numri1 - numri2;
    break;
 case '*':
    ans = numri1 * numri2;
    break;
 case '/':
    ans = numri1/numri2;
    break;
 case '%':
    ans = numri1%numri2;
    break;
 case '^':
    ans = numri1**numri2;
    break;
 default:
    alert("Ky veprim nuk ekziston!")
}
document.writeln("Rezultati: "+numri1 + veprimi + numri2
                          + " = "+ ans)