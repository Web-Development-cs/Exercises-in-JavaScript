//Renditja e numrave tek nga 0 ne 10 me while loop

function f1(){
    var i = 0;
    while(i<11){
       if(i%2!=0){
        document.writeln("Numri: "+i+" eshte numer tek!")
       }
       i++;
    }
}
f1();
document.writeln("<br>")

//Renditja e numrave qift nga 0 ne 10 me do while loop

function f2(){
    var numri = 0;
    do{
        if(numri%2==0){
            document.writeln("Numri: "+numri+" eshte numer qift!")
           }
           numri +=1;

    }while(numri<11)
}

f2();
document.writeln("<br>")


//Renditja e numrave qift dhe tek nga 0 ne 10 me for loop

function f3(){
    for(var numri=0; numri<=10; numri++){
        if(numri%2==0){
            document.writeln("Numri: "+numri+" eshte numer qift!")
        }
        else{
            document.writeln("Numri: "+numri+" eshte numer tek!")
        }
    }
}
f3();
document.writeln("<br>")

//Renditja e numrave qift dhe tek nga 0 ne 20 me while loop

function f4(){
    var i = 0;
    while(i<21){
        if(i%2==0){
            document.writeln("Numri: "+i+" eshte numer qift!");
        }
        else{
            document.writeln("Numri: "+i+" eshte numer tek!");
        }
        i++;
    }
}
f4();
document.writeln("<br>")
