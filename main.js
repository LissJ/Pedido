function sim(){
    location.href = "https://youtu.be/zzTV3exIJ98?si=DNrDcsnyD7hgg6iD"
}

function desvio(btn){
    btn.style.position = 'absolute';
    btn.style.bottom = posicao(10, 80);
    btn.style.left = posicao(10, 80);
}

function posicao(min, max){
    return(Math.random()*(max-min+min))+"%";
}