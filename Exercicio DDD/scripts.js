var ddd = prompt("Digite o DDD: ");

if(ddd == 61){
    document.getElementById("estado").innerHTML="Brasilia";
}
else{
    if(ddd == 71){
        document.getElementById("estado").innerHTML="Salvador";
    }
    else{
        if(ddd == 11){
            document.getElementById("estado").innerHTML="São Paulo";
        }
        else{
            if(ddd == 21){
                document.getElementById("estado").innerHTML="Rio de Janeiro";
            }
            else{
                if(ddd == 32){
                    document.getElementById("estado").innerHTML="Juiz de Fora";
                }
                else{
                    if(ddd == 19){
                        document.getElementById("estado").innerHTML="Campinas";
                    }
                    else{
                        if(ddd == 27){
                            document.getElementById("estado").innerHTML="Vitoria";
                        }
                        else{
                            if(ddd == 31){
                                document.getElementById("estado").innerHTML="Belo horizonte";
                            }
                            else{
                                document.getElementById("estado").innerHTML="Não Existe esse DDD";
                            }
                        }
                    }
                }
            }
        }
    }
}

