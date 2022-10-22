
function funksioni(a){

    numriNgjyrave = a;
    rez = (a == 6)? "Small Size":
          (a == 12)? "Medium Size":
          (a == 24)? "Large Size" : "No size";

    document.write(rez);
}
funksioni(12);