
function funksioni(ph){

    substanca = ph;
    ph = (ph == 1 && ph < 7)? "Mjedis acidik":
         (ph == 7)? "Mjedis neutral":
         (ph > 7 && ph<=14)? "Mjedis bazik":"Nuk i takon intervalit"
   document.write(ph);
}
funksioni(100);

