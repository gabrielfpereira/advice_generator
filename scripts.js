
min=0
max= conselhos.length - 1

function getRandomIntInclusive() {
    min = Math.ceil(this.min);
    max = Math.floor(this.max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gerarConselho(){
    document.querySelector(".content").innerHTML = conselhos[getRandomIntInclusive()].conselho
}

document.querySelector("#btnGerar").addEventListener("click", gerarConselho)