function start(){

    var kodi = window.prompt('Shkruani kodin: ');
     if(kodi == 09092000){
        kuizi()
    }
    else{
        end()
    }
}
    function end(){
        alert("Wrong Code!")
    }
    
    function kuizi(){
    pytja1 = window.prompt('The sum of numbers 10 and 12 is?')
    
    if(pytja1 == 22){ 
        alert('Answer correct! Great Job!')
}
    else{
        alert('Answer is incorrect! Try again!')
    }
    
    pytja2 = window.prompt('The square root of 324 is?"')
    if(pytja2 == 18){
        alert('Answer correct!')
    }
    else{
        alert('Wrong Code!')
    }
}