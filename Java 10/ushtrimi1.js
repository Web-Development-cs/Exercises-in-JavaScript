//Ushtrim 1
var x = "hello";

if(x !== "hello") document.writeln("Permbajtja eshte ndryshe!");
else document.writeln("Kushti false")


var x = "100";

if(x !== 100 && x != "100" || x == 100){ 
    document.writeln("Kushti eshte true!");
}
else{ 
    document.writeln("Kushti eshte false!");
}

var x = "100";

if(x !== 100 && x != 0 || x != "100" && x == 100 && x===100){ 
    document.writeln("Kushti eshte true!");
}
else{ 
    document.writeln("Kushti eshte false!");
}
