
function funksioni1(a,b,c,h){
      let syprina = (a*h)/2;
      let perimetri = (a+b+c);
  document.write('Perimetri i trekendeshit eshte: ' + perimetri);
  document.write('<br>')
  document.write('Syprina e trekendeshit eshte: '+syprina);
  document.write('<br>')
}

function funksioni2(a,b,c,h){
    let syprina = ((a+b)/2)*h;
    let perimetri = (a+b+2*c);
document.write('Perimetri i trapezit eshte: ' + perimetri);
document.write('<br>')
document.write('Syprina e trapezit eshte: '+syprina);
}


funksioni1(13,4,8,10);
funksioni2(13,7,8,6);

