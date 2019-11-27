function BT() {
    var salario = document.getElementById("salario").value;
    var imposto = 0;
    var desconto = 0;
    var linhainteira = "";

    if (salario < 1000) {
        imposto = 0;
        desconto = salario * imposto;
        salario = salario - desconto;
        linhainteira = "<div class='row'><div class='col-md-4'>O salario é: " + salario + " R$</div><div class='col-md-4'>O imposto é: " + imposto + "</div><div class='col-md-4'> O desconto é de:" + desconto + "R$</div></div>"
    }
    else {
        if (salario >= 1000 && salario < 2500) {
            imposto =0.125; 
            desconto = salario * imposto;
            salario = salario - desconto;
            linhainteira = "<div class='row'><div class='col-md-4'>O novo salario é: " + salario + " R$</div><div class='col-md-4'>O imposto é: " + imposto + "</div><div class='col-md-4'> O desconto é de :" + desconto + "R$</div></div>"
        }
        else {
            if (salario>=2500 && salario<5000) {
                imposto = 0.25;
                desconto = salario * imposto;
                salario = salario - desconto;
                linhainteira = "<div class='row'><div class='col-md-4'>O novo salario é: " + salario + " R$</div><div class='col-md-4'>O imposto é: " + imposto + "</div><div class='col-md-4'> O desconto é de :" + desconto + " R$</div></div>"
            }
            else {
                imposto = 1300;
                desconto = imposto;
                linhainteira = "<div class='row'><div class='col-md-4'>O novo salario é: " + salario + " R$</div><div class='col-md-4'>O imposto é: " + imposto + "R$ </div><div class='col-md-4'> O desconto é de: " + desconto +" R$</div></div>"
            }

        }

    }
    document.getElementById("resutado").innerHTML = linhainteira;

}