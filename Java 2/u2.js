
var n = 3;
/* ++i kthen vlerën e i-së pasi të jetë rritur. 
 * i++ kthen vlerën e i-së përpara se të rritet. 
 *Kur ++ vjen para operandit të tij quhet operatori "pre-increment" dhe kur vjen pas 
 *quhet operator "post-increment".
*/
for(var i=0; i<=n; i++){
    console.log(i++); 
    console.log("Vlera: "+i); 
}

for(var i=0; i<=n; ++i){
    console.log(++i); 
    console.log("Vlera: "+i); 
}

