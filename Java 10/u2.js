function f(numri){
    if(numri == 2 || numri == 3 || numri == 5){
        document.writeln("Numri: " + numri + " eshte numer i thjeshte")
    }

    if(numri % 2 == 0 || numri % 3 ==0 || numri % 5==0){
        document.writeln("Numri: " + numri + " nuk eshte numer i thjeshte")
    }
    else{
        document.writeln("Numri: " + numri + " eshte numer i thjeshte")
    }
    }
f(2);
    