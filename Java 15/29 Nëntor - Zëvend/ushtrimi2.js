//Ndërtoni dy funksione, të cilët kthejnë si rezultat një string, duke shfrytëzuar operatorët logjikë 
//dhe operatorët e krahasimit?

function detyra2(a,b,c){
  if(a!=0 || b!=0){
    document.writeln("Wrong numbers!")
  }
  else if(a==1 && b==1 && c==1){
    document.writeln("Kane vleren e njejte!")
  }
  else{
  document.writeln("Vlera a= "+a+", b= "+b+", c= "+c)
  }
}

function zgjimi(){
    let x=window.prompt("WHat is the secret number: ");
    let rez;
    if(x==10){
        rez = "The secret number was found!"
    }
    else{
        rez = "The secret number was yet to be found!"
    }
    return alert(rez);
}

detyra2(0,0,1)
zgjimi();
