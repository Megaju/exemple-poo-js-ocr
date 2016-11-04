// création de notre tout 1er personnage
var perso = {
    name: "Aurora",
    life: 150,
    force: 25,
    xp: 0,
    
    // renvoie la description du personnage
    describe: function () {
        var description = this.name + " a " + this.life + " points de vie et a une force de " + this.force + " et possède " + this.xp + " d'expérience.";
        return description;
    }
};

// compagnon d'Aurora
var perso2 = {
    nom: "Glacius",
    sante: 130,
    force: 30,
    xp: 0,

    // renvoie la description du personnage
    describe: function () {
        var description = this.name + " a " + this.life + " points de vie et a une force de " + this.force + " et possède " + this.xp + " d'expérience.";
        return description;
    }
};

console.log(perso.describe());

// Aurora est blessée par une flèche
perso.life = perso.life - 20;

// Aurora trouve un bracelet de force
perso.force = perso.force + 10;

console.log(perso.describe());