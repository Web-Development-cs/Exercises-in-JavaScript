//Krijoni një do while loop e cila tregon se një numër është i thjeshtë 
//nga numri 0 deri në 10.

var numri=1;
do{
    if(numri == 1){
        document.write("Numri: "+numri+" nuk eshte as i thjeshte dhe as i perbere!" + "<br>")
        numri++
    }
    if(numri == 0){
        document.write("Numri: "+numri+" nuk eshte as i thjeshte dhe as i perbere!")
    }
   if(numri%2==0 && numri%3==0){
      document.write("Numri: "+numri+" nuk eshte i thjeshte")
   }
  else if(numri%1==0 || numri%2==0 || numri%3==0 || numri%4==0 || numri%5==0){
    document.write("Numri: "+numri+" nuk eshte i thjeshte")
}
numri++;
document.write("<br>")
}while(numri<=10)