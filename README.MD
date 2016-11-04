# EXEMPLE DE POO EN JS AVEC OPENCLASSROOM

> PAGE 1 : [Site du Zéro](https://openclassrooms.com/courses/apprenez-a-coder-avec-javascript/creez-vos-premiers-objets) pour voir le cours en question.
> PAGE 2 : [Site du Zéro](https://openclassrooms.com/courses/apprenez-a-coder-avec-javascript/trop-classe-la-poo) pour voir le cours en question.

## C'est quoi un objet ?

> Prenons un exemple très concret : pensez à un stylo, ou regardez celui qui est peut-être devant vous. Etudions ce stylo : quelles sont ses caractéristiques ? Sa couleur d'écriture (bleu, noir, rouge...), son type (à encre, à bille, à mine...), son fabricant... Sans oublier le plus important : il permet d'écrire ! Notre stylo possède un certain nombre de propriétés qui le caractérisent.

> Revenons à nos programmes : qu'est-ce qu'un objet informatique ? Tout comme ce stylo, un objet informatique est une entité qui possède des propriétés. Chaque propriété définit une caractéristique de l'objet. Une propriété peut être une information associée à l'objet (exemple : la couleur du stylo) ou une action (exemple : la capacité du stylo à écrire).

## Création d'un objet

> var perso = {
    name: "Aurora",
    life: 150,
    force: 25
  };
  
## Fonction dans un objet : les méthodes

> describe: function () {
        var description = this.name + " a " + this.life + " points de vie et a une force de " + this.force + ".";
        return description;
    };
    
## Le mot clé this

> Observez maintenant le corps de la méthode *decrire()* de notre objet *perso*. Un nouveau mot-clé y apparaît : *this*. Il est défini automatiquement par JavaScript à l'intérieur d'une méthode et représente l'objet sur lequel la méthode a été appelée.

> La méthode *decrire()* ne prend plus de personnage en paramètre : elle utilise *this* pour accéder aux propriétés de l'objet sur lequel elle a été appelée.