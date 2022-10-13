function shprehja(){
    a = 5;
return document.write('a='+a);
}

document.write('<br>')

function metoda(a){
return document.write('a='+a);
}

function shprehjaM(a,b,c,h){
    syprina = ((a+b)/2)*h;
    perimetri = a+b+2*c;
    document.write('<br>')
    document.write('Syprina: '+syprina);
    document.write('<br>')
    document.write('Perimetri: '+perimetri);
}

shprehja();
metoda(150);
shprehjaM(10,5,8,6);