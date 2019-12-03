var numMusica = 0;
var pause = 0;
var musicas = [];
var I = 0;

function tocaAnterior() {
    numMusica--
    document.getElementById("mymusic").src = "./Musica" + numMusica + ".mp3";
    document.getElementById("mymusic").play();
}

function tocaAtual() {
    document.getElementById("mymusic").musicas[0];
    document.getElementById("mymusic").currentTime = pause;
    document.getElementById("mymusic").play();
}

function paraTudo() {
    pause = document.getElementById("mymusic").currentTime;
    document.getElementById("mymusic").pause();
}

function tocaProxima() {
    numMusica++
    document.getElementById("mymusic").src = "./Musica" + numMusica + ".mp3";
    document.getElementById("mymusic").play();
}

function Adiciona() {
    musicas[I] = document.getElementById("NM").value;
    console.log(musicas[I])
    I++
    console.log(I)
}