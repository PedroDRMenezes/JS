var IDP
function IDN() {
    IDP = document.getElementById("IDF").value;
    console.log(IDP);

    var url = "https://jsonplaceholder.typicode.com/users/" + IDP;
    console.log(url);

    fetch(url, { method: "GET" })
        .then(response => response.json())
        .then(json => Preenche(json));
}

function Preenche(json) {
    var result = document.getElementById("result");
    result.innerHTML += "Nome: " + json.name + "<br/>";
    result.innerHTML += "Usuario: " + json.username + "<br/>";
    result.innerHTML += "Email: " + json.email + "<br/>";
    result.innerHTML += "Endereço: " + "<br/>";
    result.innerHTML += "Rua: " + json.address.street + "<br/>";
    result.innerHTML += "Suite: " + json.address.suite + "<br/>";
    result.innerHTML += "Cidade: " + json.address.city + "<br/>";
    result.innerHTML += "CEP: " + json.address.zipcode + "<br/>";
    result.innerHTML += "Numeuro de Celular: " + json.phone + "<br/>";
    result.innerHTML += "Pagina da Web: " + json.website + "<br/>";
    result.innerHTML += "Empresa: " + "<br/>";
    result.innerHTML += json.company.name + "<br/>";
    result.innerHTML += json.company.catchPhrase + "<br/>";
    result.innerHTML += json.company.bs + "<br/>";
    result.innerHTML += "<hr>"
}