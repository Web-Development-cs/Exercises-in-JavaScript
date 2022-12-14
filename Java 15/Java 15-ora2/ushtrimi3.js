//Gjeni shumën e elementeve të një vargu, i cili ka 10 elemente?
 let vargu = new Array(10);
 vargu[0] = 10;
 vargu[1] = 2;
 vargu[2] = 1;
 vargu[3] = 5;
 vargu[4] = 4;
 vargu[5] = 11;
 vargu[6] = 7;
 vargu[7] = 3;
 vargu[8] = 9;
 vargu[9] = 8;

 //shuma
 let shuma = 0;
 for(var i=0; i<vargu.length; i++){
    shuma += vargu[i];
 }
 document.writeln("Rezultati eshte: " + shuma);
