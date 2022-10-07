
function syprinaDrejtkendeshit(a,b){
   return a*b;
}

function syprinaTrekendeshit(b, hb){
    return (b*hb)/2;
}

let x = syprinaDrejtkendeshit(9,5);
let y = syprinaTrekendeshit(11,4);

document.write('Syprina e drejtkendeshit: ' + x);
document.write('<br>');
document.write('Syprina e trekendeshit: ' + y);