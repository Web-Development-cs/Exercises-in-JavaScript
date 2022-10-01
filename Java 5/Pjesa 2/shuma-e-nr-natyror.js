
    function funksioni1(m){
        var shuma = 0;
        for(var i=1; i<=m; i++){
             shuma = shuma + i;
             //shuma +=i;
        }
        return shuma;
    }
    let ndryshore= funksioni1(10);
    document.writeln('Rezultati i fituar eshte: ' + ndryshore);