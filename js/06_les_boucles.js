// alert('ok');

/********************
     LES BOUCLES
 *********************/

 // il y'a differents types de boucles, les plus utilisées sont la bpucle "FOR" et la boucle "while"
 //*-* Boucle FOR() :
 for(let i = 0; i <= 5; i++ ) {
     document.write('<p>Nombre de tour((s) de boucle(s) : <em style="background:yellow;">'+ i +'</em></p>');
 }
 document.write("<hr>");

 /*
 Pour i = 0; => j'initialise le départ de ma boucle à 0
 Pour i<= 5; => tant que la valeur de i est inférieur ou égale à 5
 i++; => j'incrémente (j'ajoute) un tour de boucle
 En gros je donne l'instruction de faire un tour de boucle suplémentaire tant que la valeur de i n'est pas égale ou supérieur à 5
 */

 // la boucle WHILE

 var j = 0;
 while(j <= 7){
    document.write('<p>Nombre de tour((s) de boucle(s) : <em style="background:yellow;">'+ j +'</em></p>');
    // ATTENTION A NE PAS OUBLIER L'INCREMENTATION
    j++;  
 }
 document.write("<hr>");




/* -----------------------------
            EXERCICE
------------------------------ */

// -- Supposons le tableau suivant :
var Prenoms = ['Jean', 'Marc', 'Matthieu', 'Luc', 'Pierre', 'Paul', 'Jacques', 'Hugo'];

/**
 * CONSIGNE : Grâce à une boucle FOR, 
 * affichez la liste des prénoms
 * du tableau ci-dessus dans la console, 
 * ou sur votre page.
 */

console.log(Prenoms);
for(let i = 0; i < Prenoms.length; i++){
    console.log(Prenoms[i]);
    document.write(Prenoms);
    document.write(" / ");

}