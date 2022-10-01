/** File ne JS
 * Funksioni duke perdorur operatore ne JavaScript
 */
     
 function f(a,b,c){
    a +=b-c;
    b **=a;
    c /= (a/b)**2;
return a<<c;
}
const result = f(3,4,5);
document.writeln('Rezultati i fituar eshte: '+ result);
document.alert('Shtyp rezultatin: ');