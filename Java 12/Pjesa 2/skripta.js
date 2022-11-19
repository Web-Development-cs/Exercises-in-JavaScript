function randomString() {  
    //define a variable consisting alphabets in small and capital letter  
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghijklmnopqrstuvwx";  
      
    //specify the length for the new string  
var randomstring = '';  

    //loop to select a new character in each iteration  
var rnum = Math.random() * alphabet.length;  
var x = Math.floor(rnum)
randomstring += alphabet.substring(x, rnum+1);  


     //display the generated string   
document.getElementById("randomfield").innerHTML = randomstring;  
}  
