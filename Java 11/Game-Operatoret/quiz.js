function kodi_kuizit(){
  var kodi = window.prompt('Shkruani kodin');
  result = (kodi == 366647)? kuizi() : endd()
}

function endd(){
    alert('Wrong Code')
}

function kuizi(){
pytja1 = window.prompt('The sum of 3 and 5 is?')
rez = (pytja1 == 8)? alert('Pergjigjja e sakte!') : 'Pergjigjja e pasakte!'
alert('Great job!')
}
