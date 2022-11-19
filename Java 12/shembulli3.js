
/*Ushtrimi i katërt
 * Krijoni një for loop, e cila shfaq numrat qift nga 0 në 37.
 */
for(var numri=0; numri<=37; numri++){
    if(numri%2==0){
    document.write("Numri: " + numri +" eshte qift!" + "<br>")
}
else{
    document.write("Numri: " + numri +" eshte tek!" + "<br>")
}
}