var I = 1;
function Botao() {
    var texto = document.getElementById("tarefa").value;
    document.getElementById("resposta").innerHTML += "<div class='col-md-2'><input type='checkbox' aria-label='Chebox para permitir input text' onclick='check();'></div><div class='col-md-8' id='corte'>"+texto+"</div><div class='col-md-2'>"+I+"</div>"
    I++
}

function check() {
    var texto2 = document.getElementById("corte").value;
    document.getElementById("resposta").innerHTML="<stryke>"+texto2+"</stryke>" 

}

//"<div class='col-md-2'><input type='radio' aria-label='Botão radio para acompanhar input text'></div><div class='col-md-8'>" + texto + "</div><div class='col-md-2'>" + I + "</div>"

//<div class='col-md-2'><input type='checkbox' aria-label='Chebox para permitir input text' onclick='check();'></div><div class='col-md-8' id='corte'>"texto"</div><div class='col-md-2'>"I"</div>