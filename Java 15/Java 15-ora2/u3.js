//Gjeni shumën e elementeve të një vargu, i cili ka 10 elemente?

var vargu = new Array(10);
vargu[0]=1;
vargu[1]=21;
vargu[2]=10;
vargu[3]=0;
vargu[4]=5;
vargu[5]=3;
vargu[6]=4;
vargu[7]=6;
vargu[8]=33;
vargu[9]=16;

var shuma = 0;
for(var i=0; i<vargu.length; i++){
      shuma += vargu[i];
}
document.writeln("Shuma: " +shuma);
