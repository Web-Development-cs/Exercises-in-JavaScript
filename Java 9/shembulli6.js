
function funksion(){
    return "Hello JavaScript";
}
var ndryshorja = new funksion();

document.writeln(ndryshorja instanceof String);
document.writeln(ndryshorja instanceof Object);
document.writeln(ndryshorja instanceof funksion);
document.writeln(ndryshorja instanceof Array);

