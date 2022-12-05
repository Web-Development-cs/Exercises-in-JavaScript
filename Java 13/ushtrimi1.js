//Renditja e numrave 0-10
var numri = 0;

while(numri<=10){
   document.writeln("Numri: "+ numri+"<br>");
   //document.writeln("<br>")
   numri = numri +1;
   //numri++
   //numri += 1
}
document.write("<br>")

//Renditja e numrave qift nga 0-10 me while loop
var number=0;
while(number<11){
   document.writeln("Numri: "+ number+" eshte numer qift"+"<br>");
   number = number+2;
}
document.write("<br>")

//Menyra e dyte e renditjes se numrave qift nga 0-10 me while loop

let numer = 0;
while(numer<11){
	if(numer%2==0){
	   document.writeln("Numri: "+ numer+" eshte numer qift"+"<br>");
	}
	numer++;
}
document.write("<br>")


//Renditja e numrave tek nga 0-10 me while

let numerr = 0;
while(numerr<=10){
	if(numerr%2!=0){
	  document.writeln("Numri: "+ numerr+" eshte numer tek"+"<br>");
	}
	numerr += 1;
}
document.write("<br>")

//Renditja e numrave tek nga 0-10 me do while

var value = 0;
do{
	if(value%2!=0){
	  document.writeln("Numri: "+ value+" eshte numer tek"+"<br>");
	}
	value += 1;
}while(value<=10)

document.write("<br>")

//Menyra e dyte e renditjes se numrave tek nga 0-10 me do while loop

let valuee = 0;
while(valuee<11){
	if(valuee%2==0){
	   document.writeln("Numri: "+ valuee+" eshte numer qift"+"<br>");
	}
	else{
	  document.writeln("Numri: "+ valuee+" eshte numer tek"+"<br>");
	}
	valuee++;
}
document.write("<br>")
