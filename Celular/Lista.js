var I = 1;
function Botao() {
    var texto = document.getElementById("tarefa").value;
    document.getElementById("resposta").innerHTML += "<div class='col-md-2'><input type='checkbox' aria-label='Chebox para permitir input text' onclick='check(this," + I + ");'></div><div class='col-md-8' id='corte" + I + "'>" + texto + "</div><div class='col-md-2'>" + I + "</div>"
    I++
}
var texto2 = "";
function check(ch,id) {
    if (ch.checked) {
        document.getElementById("corte" + id).style.textDecoration = "line-through";
    }
    else{
        document.getElementById("corte" + id).style.textDecoration = "";
    }
}

