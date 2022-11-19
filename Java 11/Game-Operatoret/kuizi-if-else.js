function kodi_kuizit(){
    var kodi = window.prompt('Shkruani kodin');
    if(kodi == 366647){
         kuizi()
        }
    else{ 
        endd()
    }
  }
  function endd(){
      alert('Wrong Code')
  }
  
  function kuizi(){

  pytja1 = window.prompt('The sum of 3 and 5 is?')
  score = 0;
  age = 0;
  if(pytja1 == 8){
     alert('Pergjigjja e sakte!')
     score +=1;
     age +=6
   } 
   else{
    alert('Pergjigjja e pasakte!')
    score +=0;
    age +=0;
   }

  var pytja2 = window.prompt('Square root of 144 is?')
  if(pytja2 == 12){
    alert('Pergjigjja e sakte!')
    score +=1;
    age +=6
  }
  else{
    alert('Pergjigjja e pasakte!')
    score +=0;
    age +=0;
  }


  //Rezultati:
   if(pytja1 == 8 && pytja2 != 12){
     score=1;
     age = 6;
   }

   result = alert('Score: '+score+ ' . Age: '+age);
  }
  