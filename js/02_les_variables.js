/**************
  LES VARIABLES
 ****************/

 //1. je fais une alerte pour verifier que mon fichier js est bien relié à mon html
 // alert("js okay");

 /*
 lorsque l'on a besoin de structurer une informatuion on utilise une variable. une variable peut être interprêté comme une boite dans laquelle nous allons stocker une information.

 IL EXISTE PLUSIEURS TYPE DE VARIABLE

 */

 // pour lui affecter une valeur :
 var Prenom = 'Mamadou';

 // Afficher la valeur d'une variable :
 //a. pour tester une valeur on ouvre la console du navigateur (f12) puis on écrit le nom de la variable à droite des">>"puis EnTRER

 //b- Afficher une alerte avec la variable (NE PAS METTRE DE GUILLETS)
 alert(Prenom);

 //c- on écrit dans le script (code)
 console.log(Prenom);

 //IL est possible d'écrire plusieurs variables sur une seule ligne : var nb1, nb2, nb3;
 //& d'y affecter des valeurs :
 nb1 =1;
 n2 =50;
 nb3 =220;

 // Une instruction se termine TOUJOURS par un point virgule.

 // le nom d'une variable peut comporter des lettres et des chiffres mais exclut les signes de ponctuation (espace, accent...).

 // \!\ LE JS EST SENSIBLE A LA CASSE  \!\ (alt  gr + 8 pour avoir " \")
 /*
 mavariable est different de maVariable ou ma_variable
 */

 // écriture snake case => ma_variable
 // écriture comelcase => maVariable

 /**************************
  * LES TYPES DES VARIABLES
  **************************/

  //-- typeof, me permet de connaitre le type de ma variable:
  console.log(typeof Prenom);
  //-- Déclaration et affectation d'un nombre :
  var Age = 40;
  console.log(typeof Age);
  //-- les variables de type
  var uneDecimal = -2.984;
  console.log(typeof uneDecimal); // la console retourne "number" donc un / des chiffres

  // -- les variables de type Booléens (boolean)
// LE BOOLEAN permet de verifier si l'information est vrai (true) ou FALSE (faux)
  var unBoolean = false; // true
  console.log(unBoolean); // retourne false
  console.log(typeof unBoolean); // retourne boolean

  //-- les CONSTANTES


  // la déclaration CONST permet de créer une constante accessible uniquement en lecture, sa valeur ne pourra pas être modifiée par des réaffectations ultérieurs. Une constante ne peut pas être déclarée à nouveau.

  const HOST ="localhost";
  const USER ="root";
  const PASSWORD ="mysql";
  /*
  Donc il est impossible de faire cela : 
     const USER = "Mamadou";

  la console me retourne => syntaxError: redeclaration of const USER
  */
 // Dans la convention on écrit les constantes en majuscule pour les reconnaitre
 var unNombre = "24";
 console.log(unNombre);// affiche 24
 console.log(typeof unNombre); // retourne string (chaine de caractère)

 // pour converitr le string (chaine de caractère) "24" en number :
 unNombre = parseFloat(unNombre); // parsefloat permet d'interpréter le string 24 en chiffre 24
 console.log(unNombre);// affiche 24
 console.log(typeof unNombre);// retourne number

 // pour convertir un chiffre en string
 var nb4 = 93;
 console.log(nb4);// affiche 93
 console.log(typeof nb4);// la console interprète le nb4 comme chiffre

 nb4 = nb4.toString(); // toString()permet de convertir un nombre entier ou décimal en chaine de caractère (string).
 console.log(typeof nb4);
