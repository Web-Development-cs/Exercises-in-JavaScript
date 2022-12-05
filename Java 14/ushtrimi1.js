// 12.1.2022
var day;
var numri_rendor = new Date().getDay() -1;
// forma tjeter: renditja e cases prej 1-7
switch(numri_rendor){
    case 0:
        day = "Monday";
        break;
    case 1: 
        day = "Tuesday";
        break;
    case 2:
        day = "Wednesday";
        break;
    case 3:
        day = "Thurday";
        break;
    case 4:
        day = "Friday";
        break;
    case 5:
        day = "Saturday";
        break;
    case 6:
        day = "Sunday";
        break;

    default:
    document.write("Error!");
    break;
}
document.writeln("Today is: " + day)