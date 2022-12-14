//Ndërtoni një funksion, i cili kthen rezultatin e shprehjes ((a*b)-3*c)/(b-1), 
//ku b është i ndryshëm nga 1?

function detyra3(a,b,c){
    let rezultati;
 if(b != 1){
    rezultati = ((a*b)-3*c)/(b-1);
 }
 else{
    document.writeln("Infinity");
 }
}

//Ndërtoni një funksion, i cili kthen rezultatin e shprehjes ((c-3)+2*b)/a, 
//ku a është i ndryshëm nga 0?

function doni(x,y,z){
   let answer;
   if(x != 0){
    answer = ((z-3)+2*y)/x;
   }
   else{
    document.writeln("Vlera e z=0");
   }
}
detyra3(1,10,1);
//doni(0,1,1);