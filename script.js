// création de notre tout 1er personnage
/*var perso = {
    name: "Aurora",
    life: 150,
    force: 25,
    xp: 0,
    
    // renvoie la description du personnage
    describe: function () {
        var description = this.name + " a " + this.life + " points de vie et a une force de " + this.force + " et possède " + this.xp + " d'expérience.";
        return description;
    }
};*/

// compagnon d'Aurora
/*var perso2 = {
    nom: "Glacius",
    sante: 130,
    force: 30,
    xp: 0,

    // renvoie la description du personnage
    describe: function () {
        var description = this.name + " a " + this.life + " points de vie et a une force de " + this.force + " et possède " + this.xp + " d'expérience.";
        return description;
    }
};*/

var Perso = {
    // fonction d'initalisation de l'objet
    init: function (name, life, force) {
        this.name = name;
        this.life = life;
        this.force = force;
        this.xp = 0; // ici l'xp sera forcément de 0 pour tout nouveau perso
    },

    // Renvoie la description du personnage
    describe: function () {
        var description = this.name + " a " + this.life + " points de vie, " +
            this.force + " en force et " + this.xp + " points d'expérience";
        return description;
    }
};

// ancienne façon de créer nos perso quand on avait de init:
/*var perso1 = Object.create(Perso);
perso1.nom = "Aurora";
perso1.sante = 150;
perso1.force = 25;

var perso2 = Object.create(Perso);
perso2.nom = "Glacius";
perso2.sante = 130;
perso2.force = 35;*/

// nouvelle façon de créer nos perso avec init:
var perso1 = Object.create(Perso);
perso1.init("Aurora", 150, 25);

var perso2 = Object.create(Perso);
perso2.init("Glacius", 130, 30);


console.log(perso1.describe());
console.log(perso2.describe());

console.log(perso1.describe());

// Aurora est blessée par une flèche
perso1.life = perso1.life - 20;

// Aurora trouve un bracelet de force
perso1.force = perso1.force + 10;

console.log(perso1.describe());