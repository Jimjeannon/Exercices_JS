//Exercice 1 btn hello world !

document.getElementById("btn")
    .addEventListener("click", function() {
        alert("Hello World!");
    });


//Exercice 2 Changer la couleur de tous les boutons en un click sur btn vert 

const changeColor = (color) => {
    document.querySelectorAll(".btnCouleur").forEach(btn => {
        btn.style.backgroundColor = color;
    });
}
document.querySelectorAll(".btnCouleur").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        changeColor(e.target.getAttribute("data-color"));
    });
});
//Exercice 3 btn change de background-couleur onclick 

function changeCouleur(nouvelleCouleur) {
    document.getElementById("btnOrange").style.background = nouvelleCouleur;
}

document.getElementById("btnOrange")
    .addEventListener("click", function() {
        changeCouleur('orange');
    });

//Exercice 4 le texte change d'emplacement de div

function changeTexte() {
    var para = document.querySelector("#textForm").value;
    document.getElementById("divForm").innerHTML = para;
}

document.querySelector('#bouton').addEventListener("click", changeTexte);

//Exercice 5 Afficher des images avec des mots cles 

document.getElementById("btnImg")
    .addEventListener("click", function() {
        var key = document.querySelector("#textKey").value;
        if (key === ("journal")) {
            let result;
            var par = document.getElementById('imageDiv');
            var img = document.createElement('img');
            img.src = "/img/1.jpg";
            par.appendChild(img);
        }
        if (key === ("photographe")) {
            let result;
            var par = document.getElementById('imageDiv');
            var img = document.createElement('img');
            img.src = "/img/2.jpg";
            par.appendChild(img);
        }
        if (key === ("bureau")) {
            let result;
            var par = document.getElementById('imageDiv');
            var img = document.createElement('img');
            img.src = "/img/3.jpg";
            par.appendChild(img);
        }
    });