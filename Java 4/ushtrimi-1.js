var x=10;
var y=2;

document.write("Shuma eshte "+ (y+x));
console.log("Ndryshimi eshte "+ (x-y));
console.log("Prodhimi eshte "+ (y*x));
console.log("Heresi eshte "+ (x/y));

function modulimi(a,b){
    let z  = a%b;
return z;
}

function fuqia(a,b){
   let z = a**b;
return z;
}

let rezultati = modulimi(100,30);
    console.log("Rezultati i fituar nga a%b eshte "+rezultati);

let rez = fuqia(10,3);
    console.log("Rezultati i fituar nga a**b eshte "+rez);