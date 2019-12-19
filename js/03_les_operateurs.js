// Je verifie ma connection au fichier html
// alert('okay js');
/******************** 
Les operateurs arithmétiques
********************/
// L'addition
//1 Déclaration et affectation de plusieurs variables :
var nb1, nb2, resultat;
nb1 = 10; 
nb2 = 5;
// L'addition de nb1 & nb2 avec l'opérateur " + "
 resultat = nb1 + nb2;
console.log(resultat);
// La soustraction de nb1 & nb2 avec l'opérateur " - "
resultat = nb1 - nb2;
console.log(resultat);
// la division de nb1 & nb2 avec l'opérateur " / "
resultat = nb1 / nb2;
console.log(resultat);

// la soustraction de nb1 & nb2 avec l'opérateur "/"
resultat = nb1 / nb2;
console.log(resultat);

/*
le modulo correspond au reste de la division.
le modulo de nb1 & nb2 avec l'opérateur "/"

*/
resultat = nb1 % nb2;
console.log(resultat);

/**************************
  LES ECRITURES SIMPLIFIEES
 ****************************/

 // Addition
 // je créée ma variable nb1 et je lui affecte une valeur 15(avec le symbole =)
 nb1 = 15;
 // première variante :
 // pour ajouter 5 à ma valeur de 15, je réaffecte à ma variable une nouvelle instruction :
 // je lui dit que ma variable nb1 sera maintenant le résultat de ma valeur de vase (donc 15) auquel je lui rajoute 5 :
 /* ma variable              la valeur de réference   */
        // nb1 =                     nb1 + 5;    // ici on dit que le resultat final de nb1 est la somme de notre variable +5

 // console.log(nb1);//retourne 20 donc 15 + 5
 // deuxième variante
 nb1 += 5; // ce qui est équivalent à écrire nb1 = nb1 + 5
 console.log(nb1);
 
/*
    je peux procéder de la même manière pour tous les autres opérateurs arithmeétiques :
    " + ", "- ", " * ", " / " et " % "
*/
