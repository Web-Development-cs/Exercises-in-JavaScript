function f1(a,b){
	var rez;
	if(a<0){
		rez += a*b;
	}
	else{
		rez += a-b;
	}
	
	if(b<0){
		rez += a/b;
	}
	else{
		rez += a+b;
	}
}
f1(-1,10)

function f2(){
	let shuma = 0;
for(var i=0;i<11;i++){
	if(valuee%2==0){
	   document.writeln("Numri: "+ valuee+" eshte numer qift"+"<br>");
	}
	else{
	  document.writeln("Numri: "+ valuee+" eshte numer tek"+"<br>");
	}
	valuee++;
}
}