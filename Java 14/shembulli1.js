// -1, If it is 6, it will print 7
let day;
let y = new Date().getDay();
x = y-1 ;
switch (x){
    case 0:
        day = "Today is Monday!"
        break;
    case 1:
        day = "Today is Tuesday!"
        break;
    case 2:
        day = "Today is Wednesday!"
        break;
    case 3:
        day = "Today is Thurday!"
        break;
    case 4:
        day = "Today is Friday" 
        break;
    case 5:
        day = "Today is Saturday" 
        break;
    case 6:
        day = "Today is Sunday!"   
 default: "Wrong time" 
}
document.writeln(""+day)