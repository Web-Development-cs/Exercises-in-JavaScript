//Ndërtoni një kalkulator të thjeshtë.
var veprimi = window.prompt("Zgjedhni veprimin matematikor: ");
let numri1 = parseFloat(window.prompt("Numri 1 ka vleren: "));
let numri2 = parseFloat(window.prompt("Numri 2 ka vleren: "));
var ans;

if(veprimi == '+'){
    ans = numri1 + numri2;
}
else if(veprimi == '-'){
    ans = numri1 - numri2;
}
else if(veprimi == '*'){
    ans = numri1 * numri2;
}
else if(veprimi == '/'){
    ans = numri1 / numri2;
}
else if(veprimi == '%'){
    ans = numri1 % numri2;
}
document.writeln("Rezultati: "+numri1 + veprimi + numri2
                          + " = "+ ans)