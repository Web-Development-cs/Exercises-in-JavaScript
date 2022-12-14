function detyra6(a,b,c,d,e,f){
    let vargu = [a, 1, b, -5, c, 21, d, -3, e, 7, f, 9];
    let shuma=0;
    for(var i=0; i<vargu.length;i++){
       if(vargu[i]%2==0){
          shuma += vargu[i];
        //  document.writeln("Shuma eshte: "+shuma);
       }
    }
    document.writeln("Rezultati eshte: "+shuma);
}
detyra6(0,2,4,6,8,10);
