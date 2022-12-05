let Personne = {
    nom1: "coursan",
    prenom1: "corentin",
    age1: "19",
    sexe1: "masculin",
    lieu1: "maubeuge",


    getNomPrenom1: function () {
        return "Ma personne s'apelle " + this.nom1 + " " + this.prenom1 + ", elle a " + this.age1 + " ans"
            + " et elle est de sexe " + this.sexe1
    },

    getModif1: function () {
        this.age1 = 34
        return this.age1
    },
}

let Tableau = [Personne.age1, Personne.lieu1, Personne.nom1, Personne.prenom1,
    Personne.sexe1,]

div = document.getElementById('boucle');

for (let i = 0; i < Tableau.length; i++) {
    div.innerHTML = Tableau;
}

console.log(Personne.getNomPrenom1());
console.log(Personne.getModif1());


