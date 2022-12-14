function online(){
let kodi = prompt("Shtypni kodin:")
if(kodi == 125543 ){
   kuizi();
}
else{
    alert("Wrong Code!")
}
}
function offlinemode(){
    alert("Nuk eshte momentalisht")
  }

function kuizi(){
    window.alert("Welcome to our quiz!")

let pytja = window.prompt("Metoda per shtypjen e te dhenave si input ne JS eshte:\nA. prompt()"
                        +"\nB. getDay()"+"\nC. getDate()"+"\nD. toString()")
let score = 0;
switch(pytja.toUpperCase()){
    case "A":
        alert("Pergjigjja e sakte!");
        score +=10;
        break;
    case "B":
        alert("Pergjigjja e pasakte!");
        break;
    case "C":
        alert("Pergjigjja e pasakte!");
        break;
    case "D":
        alert("Pergjigjja e pasakte!");
        break;
}
alert("Piket e fituara: "+score);
}
