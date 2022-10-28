
function funksion(){
    return "Hello JavaScript";
}
var ndryshorja = new funksion();

z = (ndryshorja instanceof String)? "Po, e saktë" : "Jo, e pasaktë!"
x = (ndryshorja instanceof String)? document.write(typeof z): funksion()

document.write(x)
