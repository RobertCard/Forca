let respostas = [
"frontend", "fullstack", "backend", "javascript", 
"typescript", "game", "software", "developer", "web",
"google", "styles", "design", "html", "hardware", 
"bootstrap", "reactnative", "vscode", "flutter", "index"];

let palavra = palavras[Math.floor(Math.random() * palavras.length)];

let chances = 6;
let acertos = 0;

let img = 0;

let posicao;

for (posicao = 0; posicao < palavra.length; posicao++){
    let span = document.createElement("span");
    span.setAttribute('id', posicao);

    let div = document.getElementById("palavra");
    div.appendChild(span);
}

let alfabeto = "abcdefghijklmnopqrstuvwxyz";
let letras = alfabeto.split("");

for (posicao = 0; posicao < letras.length; posicao++){
    let button = document.createElement("button");
    let letra = document.createTextNode(letras[posicao]);

    
}