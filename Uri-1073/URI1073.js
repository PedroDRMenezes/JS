var QN = prompt("Escreva o limite de numeros: ");
var Qua = "0"
if(QN>5 && QN<2000)
{
    for(I=0;I<=QN;I++)
    {
        if(I%2==0 && I!=0)
        {
            Qua = I*I;
            document.getElementById("EX").innerHTML += "O quadrado de "+I+" é: "+Qua+"<br/>";
        }
    }
}
else
{
    document.getElementById("EX").innerHTML = "Numero invalido";
}