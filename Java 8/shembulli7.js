  
    function neStok(sasia) {
        // multiple Conditional operators
    
        let phone = 1956;
        let rez = (phone < sasia) ? "Nuk ka në stok" :
                  (phone < 11) ? "Kemi 10 artikuj në stok" :
              (phone == sasia) ? "Ka artikuj në stok":"Nuk ka artikuj në stok";
    
        document.write(rez);
        }
        neStok(2000);
    

        