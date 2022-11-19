
for(var numri = 0; numri<=37; numri++){
    document.writeln(numri);
}

/* Numrat qift */

for(var numri = 0; numri<=37; numri++){
    if(numri % 2 == 0){
    document.write("<br>")
    document.writeln("Numri: " + numri + " eshte numer qift!" +"<br>");
}
}

/*Numrat tek */

for(var numri = 0; numri<=38; numri++){
    if(numri % 2 != 0){
    document.write("<br>")
    document.writeln("Numri: " + numri + " eshte numer tek!" +"<br>");
}
}
/*Numrat tek dhe qift */
for(var numri = 0; numri<=38; numri++){
    if(numri % 2 == 0){
    document.write("<br>")
    document.writeln("Numri: " + numri + " eshte numer qift!" +"<br>");
}
else{
    document.writeln("Numri: " + numri + " eshte numer tek!" +"<br>");

}
}