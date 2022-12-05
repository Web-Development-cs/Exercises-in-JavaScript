//Ndërtoni një funksion, i cili kthen si rezultat shumën e 15 numrave të parë qift?
//0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30
function qift(){
    var shuma_qift = 0;
    for(let i=0; i<=30; i++){
        if(i%2==0){
            shuma_qift += i;
          //document.writeln("Shuma e nr.qift: "+ shuma_qift)
        }
        else{
            document.writeln("Numri: "+ i + " eshte numer tek!")
        }
    }
    return document.writeln("Shuma e nr.qift: "+ shuma_qift)
}
qift()