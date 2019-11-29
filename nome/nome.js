var Nome = prompt('Digite o nome');
var qb = [];
var I = 0; 
var pos = Nome.indexOf(" ");

    while (pos>=0) { 
        qb[I] = Nome.slice(0, pos)
        Nome = Nome.slice(pos+1)
        pos = Nome.indexOf(" ")
        console.log(qb[I])
        I++
    }

    qb[I] = Nome;
    console.log(qb[I])
