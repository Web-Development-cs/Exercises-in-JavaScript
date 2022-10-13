
function funksioni(a,b,c){
    a = b-c;
    c--;
    b/=c;
    a += b**2;
return (a+b-c);
}

document.write('Rezultati i shprehjes eshte: ' + funksioni(10,20,5))
