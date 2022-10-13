
function shprehja(a,b,c){
    a = b+c;
    a++;
    b**=c;
    c -= a*2;
return (a+b-c);
}

document.write('Rezultati i shprehjes eshte: ' + shprehja(10,2,5))
document.write('<br>')
let rezultati = shprehja(10,2,5);
document.writeln('Rezultati i shprehjes eshte: ' + rezultati)
