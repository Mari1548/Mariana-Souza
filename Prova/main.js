alert("Testando o JavaScript externo");

function tocaSomCatatuafunebre(){
    document.querySelector("#som_tecla_catatua funebre").play()
}


function tocaSomCanario(){
    document.querySelector("#som_tecla_canario").play()
}

function tocaSomPardal(){
    document.querySelector("#som_tecla_pardal").play()
}

function tocaSomPheucticusludovicianus(){
    document.querySelector("#pheucticus ludovicianus").play()
}

function tocaSomPiscodeoeitoruivo(){
    document.querySelector("#som_tecla_pisco de peito ruivo").play()
}

function tocaSomRouxinol(){
    document.querySelector("#som_tecla_rouxinol").play()
}

function tocaSomUrracahudsonia(){
    document.querySelector("#som_tecla_urraca hudsonia").play()
}


document.querySelector(".tecla_catatua funebre").onclick = tocaSomCatatuafunebre;
document.querySelector(".tecla_canario").onclick = tocaSomCanario;
document.querySelector(".tecla_pardal").onclick = tocaSomPardal;
document.querySelector(".tecla_pheucticus ludovicianus").onclick = tocaSomPheucticusludovicianus;
document.querySelector(".tecla_pisco de peito ruivo").onclick = tocaSomPiscodeoeitoruivo;
document.querySelector(".tecla_rouxinol").onclick = tocaSomRouxinol;
document.querySelector(".tecla_urraca hudsonia").onclick = tocaSomUrracahudsonia;


