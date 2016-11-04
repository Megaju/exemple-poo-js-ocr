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

// Objet tout simple : un stylo
var stylo = {
    color: "rouge",
    marque: "BIC",
    dps: 999,
    
    // description du stylo
    describe: function () {
        var description = "C'est un stylo " + stylo.color + " de la marque " + stylo.marque + " et il a " + stylo.dps + " de DPS !";
        return description;
    }
}

// Objet personnage
var Perso = {
    // fonction d'initalisation de l'objet
    initPerso: function (name, life, force) {
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

// Objet adversaire
var Monster = Object.create(Perso);
Monster.initMonster = function(name, life, force, race, value) {
    this.initPerso(name, life, force);
    this.race = race;
    this.value = value;
}

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
perso1.initPerso("Aurora", 150, 25);

var perso2 = Object.create(Perso);
perso2.initPerso("Glacius", 130, 30);


console.log(perso1.describe());
console.log(perso2.describe());

console.log(perso1.describe());

// Aurora est blessée par une flèche
perso1.life = perso1.life - 20;

// Aurora trouve un bracelet de force
perso1.force = perso1.force + 10;

console.log(perso1.describe());

// Description du stylo
console.log(stylo.describe());

// Création d'un 1er ennemie !
var zogzog = Object.create(Monster);
zogzog.initMonster("Zogzog", 40, 20, "Orc", 10);

// Description du monstre
console.log("Un " + zogzog.race + " ignoble du nom de " + zogzog.name + " viens d\'apparaitre !");

// Arme de l'orc
console.log("En plus il est armé d'un incroyable stylo " + stylo.color + " de la marque " + stylo.marque + " !");

