# EXEMPLE DE POO EN JS AVEC OPENCLASSROOM

> PAGE 1 : [Site du Zéro](https://openclassrooms.com/courses/apprenez-a-coder-avec-javascript/creez-vos-premiers-objets) pour voir le cours en question.
> PAGE 2 : [Site du Zéro](https://openclassrooms.com/courses/apprenez-a-coder-avec-javascript/trop-classe-la-poo) pour voir le cours en question.

## Création d'un objet

> var perso = {
    name: "Aurora",
    life: 150,
    force: 25
  };
  
## Fonction dans un objet

> describe: function () {
        var description = this.name + " a " + this.life + " points de vie et a une force de " + this.force + ".";
        return description;
    };
    
## Le mot clé this

> Observez maintenant le corps de la méthode *decrire()* de notre objet *perso*. Un nouveau mot-clé y apparaît : *this*. Il est défini automatiquement par JavaScript à l'intérieur d'une méthode et représente l'objet sur lequel la méthode a été appelée.

> La méthode *decrire()* ne prend plus de personnage en paramètre : elle utilise *this* pour accéder aux propriétés de l'objet sur lequel elle a été appelée.