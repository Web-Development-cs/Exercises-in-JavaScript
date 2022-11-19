function quiz(){

    let a = window.prompt("The sum of 5 and 2 is?");
    alert("Answer is: 7");
    window.alert(" Please be focused!");
  
    let b = window.prompt("Square root of 196 is?");
    alert("Answer is: 14")
    window.alert(" Please be focused!");
    
    var c = window.prompt("sin30 is equal with cos of?");
    alert("Answer is: 60")
    window.alert("Thank you for taking our quiz!");
  
    var result = 0;
    var age = 0;  
  
      if(a==7){
         result +=1;
         age +=7;
            if(b==14){
                      if(c==60){
                          result+=1;
                          age+=5;
                      } else{
                             result+=0;
                             age+=0;}
                result +=1;
                age+=5;
            }else{
                result+=0;
                age+=0;
            }
        }

        alert("Rezultati: "+ result + " dhe mosha:" + age);
   
  }
