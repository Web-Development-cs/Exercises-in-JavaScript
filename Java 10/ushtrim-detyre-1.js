//Krijoni një if-else statement që tregon se një numër është tek apo qift.

var numri = 100;

if(numri % 2 == 0){
    document.writeln("Numri: "+numri+" eshte numer qift!")
}
else{
    document.writeln("Numri: "+numri+" nuk eshte numer qift!")
    document.writeln("Numri: "+numri+" eshte numer tek!")
}


//nr qift dhe tek operatoret e kushtezuar

function f(numri){
    rez = (numri % 2==0)? "Numri qift":"Numri tek"
 return document.writeln(rez);
}

f(221);