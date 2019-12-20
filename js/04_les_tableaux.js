// alert('ok js');
//-- Déclarer un tableau INDEX :
// a)
var monTableau = []; // alt gr + 5
console.log(monTableau);
// b)
var myArray = new Array;
console.log(myArray);
// myArray et monTableau sont des tableaux qui peuvent contenir plusieurs informations

//Affecter des valeurs au tableau, plusieurs methode :
//a)
var nosPrenoms = ["Mamadou", "vincent", "Philippe", "Zitouni"];
console.log(nosPrenoms);
//b)
monTableau[0] = "Mamadou";
monTableau[1] = "Vincent";
monTableau[2] = "Philippe";
monTableau[3] = "Zitouni";
console.log(monTableau);

// -- Déclarer et affecter des valeurs à un  objet.

var Coordonnee = {
    prenom : "Hugo",
    nom : "LIEGEARD",
    age : 82
};
console.clear();//permet  d'effacer les lignes de débug qui précède le console.clear()
console.log(Coordonnee);// j'affiche toute les informations de mon tableau
console.log(Coordonnee['prenom']);// je n'affiche que le prenom
console.log(Coordonnee.nom);// je n'affiche que le nom

//*-- on va créer 2 tableaux indexé

var listeDePrenom = ["Ousmane", "Cherif", "Hugo"];
var listeNom = ["MAMA", "BENLLAL", "LEIGEARD"];
var Annuaire = [listeDePrenom, listeNom];

console.log(Annuaire);
document.write();// fonction native de de JS qui permet d'inscrire un résultat directement sur la page html et non plus sur console

document.write(Annuaire[0][2] + " " + Annuaire[1][2]);
document.write("<hr>");
document.write(Annuaire[0][0]);
document.write(" ");
document.write(Annuaire[1][1]);
//tableau à 2 dimension non indexé
var contact = [
    {prenom: "Hugo", nom: "LIEGEARD", tel: "0783 97 15 15"},
    {prenom: "Salim", nom: "SOUMARE", tel: "0783 97 13 14"},
    {prenom: "Pransun", nom: "BALASUBRA", tel: "0783 97 18 19"}
];
console.log(contact);
/* -------------------------------------------------\
|                    EXERCICE :-)                   |
|   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   |
|   Créez un Tableau à 2 dimensions appelé          |
|   "AnnuaireDesStagiaires" qui contiendra          |
|   toutes les coordoonnées pour chaque stagiaire.  |
|                                                   |
|   Ex. Nom, Prénom, Tel                            |
\------------------------------------------------- */

var AnnuaireDesStagiaires = [
    {prenom: "Hugo", nom: "LIEGEARD", tel: "0783 97 15 15"},
    {prenom: "Salim", nom: "SOUMARE", tel: "0783 97 13 14"},
    {prenom: "Pransun", nom: "BALASUBRA", tel: "0783 97 18 19"}  
];

console.log(AnnuaireDesStagiaires);
//--exemple à 3 dimension

var array3Dimension =[
    {
        prenom:"Hugo",
        nom : "LIEGEARD",
        coordonnees:{
            email : "hugo.liegeard@lepoles.com",
            tel:{
                fixe: "0596 108 328",
                fax: "0596 108 632",
                port:{
                    prive:"07 83 97 10 15",
                    pro : "07 83 97 15 15"
                } 
            },
            adresse:{
                ville:"DUCOS",
                cp:"97224",
                region:"Martinique",
                pays:{
                    code:"FR",
                    nom:"FRANCE"
                }
            }
        }
    }// fermeture 1er {
];// fin array3Dimension
console.log(array3Dimension);
console.log(array3Dimension[0].coordonnees.email);

/********************* 
  AJOUTER UN ELEMENT
  
********************* */
var couleur = ['Rouge', 'Jaune', 'Vert'];
console.clear();
console.log(couleur);
console.log(couleur.length); //.length me permet d'afficher sur ma console le nombre d'élément que contient mon tableau

// pour ajouuter un élément dans mon tableau, je fais appel à la fonction push()
var nbElementsDemonTableau = couleur.push('Violet');
console.log(couleur);
console.log(nbElementsDemonTableau);

//pour ajouter un élément au début de mon tableau, je vais faire appel à la fonction unshift()

var nbElementsDemonTableau = couleur.unshift('Bisque', 'orange');
console.log(couleur);
console.log(nbElementsDemonTableau);

// pour supprimer le dernier élémént de mon tableau, je fais appel à la fonction pop()
couleur.pop();
console.log(couleur);
console.log(nbElementsDemonTableau);

// pour supprimer le prémier élément de mon tableau, j'utilise la fonction shift()
couleur.shift();
console.log(couleur);
console.log(nbElementsDemonTableau);


