
let x = true;
var y = false;
const z = false;

document.writeln(x || y && !z);
document.writeln(!x || y && z);
document.writeln(y && !x || !z);
document.writeln(!y || !z && x);
document.writeln(z || y || !x);
document.writeln(!z && !x && !y);


