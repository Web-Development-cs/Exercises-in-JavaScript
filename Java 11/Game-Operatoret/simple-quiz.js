     
function startt(){    
    var kodi = window.prompt("Shkruani kodin:")
      if(kodi == 355120){ 
        kuizi()
        }
      else{
        end()
      }
    }
      
  function end(){
      alert("Wrong Code");
  }  
  
  function kuizi(){
  
    let a = window.prompt("The sum of 50 and 20 is?");
    alert("Answer is: 70");
    window.alert("Please be focused!");
  
    answer1 = (a == 70)? "First answer correct!" : "First answer incorrect!"
    alert(answer1)
    document.writeln(answer1);

    let b = window.prompt("Square root of 196 is?");
    alert("Answer is: 14")
    window.alert("Please be focused!");
    
    answer2 = (b == 14)? "First answer correct!" : "First answer incorrect!"
    window.alert("Thank you for your answers!");
    document.writeln(answer2);
  }