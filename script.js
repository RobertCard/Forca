let answers = [
"frontend", "fullstack", "backend", "javascript", 
"typescript", "game", "software", "developer", "web",
"google", "styles", "design", "html", "hardware", 
"bootstrap", "reactnative", "vscode", "flutter", "index"];

let word = answers[Math.floor(Math.random() * answers.length)];

let chances = 6;
let hits = 0;

let img = 0;

let position;

for (position = 0; position < word.length; position++){
    let span = document.createElement("span");
    span.setAttribute('id', position);

    let div = document.getElementById("word");
    div.appendChild(span);
}

let alfabeto = "abcdefghijklmnopqrstuvwxyz";
let letters = alfabeto.split("");

for (position = 0; position < letters.length; position++){
    let button = document.createElement("button");
    let letter = document.createTextNode(letters[position]);   

    button.appendChild(letter);
    button.setAttribute('onclick', 'choice(\''+letters[position]+'\')');
    button.setAttribute('id', letters[position]);

    let div = document.getElementById("letters");
    div.appendChild(button);
}

function choice(letter) {

    let right = false;

    for (position = 0; position < word.length; position++){
        if (letter === word[position]){
            let span = document.getElementById(position);
            let l = document.createTextNode(letter);

            span.appendChild(l);

            let button = document.getElementById(letter);
            button.setAttribute('class', 'check');
            button.removeAttribute('onclick');

            hits++;
            right = true;
        }
    }

    if(right === false){
        img++;
        document.getElementById("forca").src = "img/forca"+img+".png";
        
        var button = document.getElementById(letter);
        button.setAttribute('class', 'wrong');
        button.removeAttribute('onclick');

        chances--;        
    }

    if (chances === 0) {
        let msg = document.createElement("p");
        document.getElementById("forca").src = "img/go.png"

        let button = document.createElement("button");
        let t2 = document.createTextNode("Jogar Novamente")

        button.appendChild(t2);
        button.setAttribute('class', 'new-bt');
        button.setAttribute('onclick', 'window.location.reload()');

        let div = document.getElementById("new");
        div.appendChild(msg);
        div.appendChild(button);

        

    }

    if (hits === word.length) {

        let msg = document.createElement("p");
        document.getElementById("forca").src = "img/win.png"

        let button = document.createElement("button");
        let t2 = document.createTextNode("Jogar Novamente")

        button.appendChild(t2);
        button.setAttribute('class', 'new-bt');
        button.setAttribute('onclick', 'window.location.reload()');

        let div = document.getElementById("new");
        div.appendChild(msg);
        div.appendChild(button);

        

    }
}
