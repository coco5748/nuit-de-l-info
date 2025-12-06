if (localStorage.getItem("nb")==null) {
    localStorage.setItem("nb", 1)
}

let addition = (a, b) => a + b;

function valider(x){
    let nb = localStorage.getItem("nb");
    if(quiz[nb].bonne[x]){
        localStorage.setItem("nb", addition(parseInt(nb), 1))
        afficherQuestion();
    }
}

function afficherQuestion(){
    let nb = localStorage.getItem("nb");
    document.getElementById("q").innerHTML=quiz[nb].titre;
    document.getElementById("ennoncer").innerHTML=quiz[nb].question;

    document.getElementById("a").innerHTML=quiz[nb].reponses[0];
    document.getElementById("b").innerHTML=quiz[nb].reponses[1];
    document.getElementById("c").innerHTML=quiz[nb].reponses[2];
    document.getElementById("d").innerHTML=quiz[nb].reponses[3];

    document.getElementById("score").innerHTML=nb;
}

afficherQuestion();

function reset(){
    localStorage.setItem("nb", 1)
    afficherQuestion();
}