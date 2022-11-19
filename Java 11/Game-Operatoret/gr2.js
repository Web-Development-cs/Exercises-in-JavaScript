
function start(){

var kodi = window.prompt('Shkruani kodin: ');
 x = (kodi == 09092000)? kuizi() : end()

}
function end(){
    alert("Wrong Code!")
}

function kuizi(){
pytja1 = window.prompt('The sum of numbers 10 and 12 is?')
answer = (pytja1 == 22)? alert('Answer correct! Great Job!'):
                         alert('Answer is incorrect! Try again!')

}



function kuizi_offline(){
    pytja1 = window.prompt('The product of numbers 11 and 2 is?')
    answer = (pytja1 == 22)? alert('Answer correct! Great Job!'):
                             alert('Answer is incorrect! Try again!')
    
    }