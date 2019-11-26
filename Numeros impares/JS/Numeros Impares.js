var NI = prompt("Ecreva o valor final: ");
var htmlgerado="";
var nLinha="0";

for(I=1;I<=NI;I+=2)
{

        htmlgerado += "<div class='row";
        var cssLinha = "linha_"+nLinha;
        
        
        htmlgerado += "<div class='col-sm-12'>" + I + "</div> </div>";


}
document.getElementById("resultados").innerHTML = htmlgerado;