//Ndërtoni një funksion, i cili kthen si rezultat shumën e 10 numrave të parë tek?
// 1,3,5,7,9,11,13,15,17,19
function tek(){
    var shuma_tek = 0;
    for(let i=0; i<=19; i++){
        if(i%2!=0){
            shuma_tek += i;
          //document.writeln("Shuma e nr.tek: "+ shuma_tek)

        }
        else{
            document.writeln("Numri: "+ i + " eshte numer qift!")
        }
    }
    return document.writeln("Shuma e nr.tek: "+ shuma_tek)

}
tek()