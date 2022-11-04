function koha(time){
var greeting = "";

if(time < 12){
   greeting = "Good morning!";
   document.write(greeting);
}
/*
if(time > 12 && time<=18){
    greeting = "Good afternoon!"
    document.write(greeting);
}
*/
else{
    greeting = "Good evening!"
    document.write(greeting);
}
}
koha(11);