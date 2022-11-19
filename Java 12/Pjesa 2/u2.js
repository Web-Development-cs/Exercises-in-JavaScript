// Ushtrimi 3
function ushtrimi3(a,b,c){
    rez = 0;
    shprehja = (a*b-3*c)/(b-1);
    if(b==1){
        document.writeln("Infinity")
    }
    else{
         rez += shprehja;
         document.writeln("Rezultati i shprehjes:" +rez)
    }
}
ushtrimi3(15,10,2)

//Ushtrimi 4
function ushtrimi4(a,b,c){
    rez = 0;
    shprehja = (c-3+2*b)/a;
    if(a!=0){
         rez += shprehja;
         document.writeln("Rezultati i shprehjes:" +rez)
    }
    else{
        document.writeln("Infinity")
    }
}
ushtrimi4(15,10,2)

//Ushtrimi 5
function ushtrimi5(a,b,c){
    rez = 0;
    shprehja = (c-3+2*b)/a;
    if(a!=0){
         rez += shprehja;
         alert("Rezultati i shprehjes:" +rez)
    }
    if(b !== 3){
        rez += shprehja -10;
        alert("Rezultati i shprehjes kur b!==3 :" +rez)
    }
    else{
        document.writeln("Error!")
    }
}
ushtrimi5(0,3,2)