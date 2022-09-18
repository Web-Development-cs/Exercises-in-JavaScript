

var n = 5;
/* ++i kthen vlerën e i-së pasi të jetë rritur. 
 * i++ kthen vlerën e i-së përpara se të rritet. 
 *Kur ++ vjen para operandit të tij quhet operatori "pre-increment" dhe kur vjen pas 
 *quhet operator "post-increment".
*/

for(var i=2; i<n; i++){
    console.log(Math.pow(i,2)); 
    console.log("Vlera: "+i); 
}

for(var i=2; i<n; ++i){
    console.log(Math.pow(i,2)); 
    console.log("Vlera: "+i); 
}

