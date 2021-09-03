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
let letter = alfabeto.split("");

for (position = 0; position < letters.length; position++){
    let button = document.createElement("button");
    let letter = document.createTextNode(letters[position]);   

    button.appendChild(letter);
    button.setAttribute('onClick', 'choice(\''+letters[position]+'\')');
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

            let button = document.getElementById(word);
            button.setAttribute('class', 'hits');
            button.removeAttribute('onClick');

            hits++;
            right = true;
        }
    }

    if(right === false){
        img++;
        document.getElementById("forca").src = "img/forca"+img+"png";
        
        var button = document.getElementById(letter);
        
    }
}
