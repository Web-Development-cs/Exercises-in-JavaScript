/*
function operatoret(){
    return true;
}
function operatoret2(){
    return false;
}
var vlera1 = new operatoret();
var ndryshorja2 = new operatoret2();

document.writeln(vlera1 instanceof Object);
document.writeln(ndryshorja2 instanceof Date);

document.writeln('<br>')
*/

/*
function returnn(a){
    var vlera = "100"
    rez = (a !== vlera)? document.writeln(typeof vlera): document.write("No")
    return rez;
}
var v = new returnn(100);
var l = "303";
a = (typeof l == "303")? "Po, e sakte" : "Jo, e pasakte!"
b = (!(v instanceof returnn))? document.write(typeof a): l

document.writeln('<br>');
document.writeln("a = "+a+" b = "+b);
*/

function funksioni(ndryshorja){
    var vlera = 10
    rez = (ndryshorja===10 && vlera !== 15)? 
                document.writeln(typeof vlera): 
                (ndryshorja != 0 || ndryshorja == false)? true : "new"
    return rez;
}
var v = funksioni(0);
let l = "Hello JavaScript"
b = (!v)? document.write(typeof ndryshorja): l

document.writeln("v = "+v+" b = "+b);


