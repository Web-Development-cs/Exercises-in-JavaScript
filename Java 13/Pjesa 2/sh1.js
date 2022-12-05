/*
Ndërtoni një funksion, i cili përmban dy kushte të krijuara nga deklaratat e 
kushtëzuara if-else, dhe kthen një alert message që përmban rezultatin e detyrës
*/
function sh1(a,b,c){
    let rezultati=0;
    if(a>0 && b>0){
        rezultati+= (a*a+2*b)/c
    }
    else{
        alert("Warning Message: Vlera a<0 dhe b<0!");
    }
  if(c==0){
    rezultati += (a*b-2*b)
  }
  else{
    rezultati+= (a*a+2*b)/c
  }
  return alert("Rezultati është: "+rezultati);
}
sh1(10,0,0);