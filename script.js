// création de notre tout 1er personnage
var perso = {
    name: "Aurora",
    life: 150,
    force: 25,
    
    // renvoie la description du personnage
    describe: function () {
        var description = this.name + " a " + this.life + " points de vie et a une force de " + this.force + ".";
        return description;
    }
};

console.log(perso.describe());

// Aurora est blessée par une flèche
perso.life = perso.life - 20;

// Aurora trouve un bracelet de force
perso.force = perso.force + 10;

console.log(perso.describe());