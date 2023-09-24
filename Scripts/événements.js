 // Constantes
const LIGNES = 4;
const COLONNES = 4;

//Variables globales

let grille = [
    [],
    [],
    [],
    [],



];
let tabImages = [
    "carte_dos3.png", // 0
    "boussole.png",  // 1
    "cadran.png", // 2
    "casque-ecoute.png", //3
    "chapeau.png",  //4
    "chat.png", //5
    "Lampe.png", //6
    "loupe.png", //7
    "parapluie.png" //8
];

/// <summary>
/// Auteur: Mahdi Ellili 
///Description : Méthode qui sert à initialiser des nombres de 1 à 8 dans un tableau 2D
/// Date: 2022-04-29
/// </summary>
function initialisergrille() {
   
    var iNumColonne = 1;
    for (var iLigne = 0; iLigne < LIGNES; iLigne++) {
        for (var iColonne = 0; iColonne < COLONNES; iColonne++) {
            grille[iLigne][iColonne] = iNumColonne;
            
            if (iNumColonne == 8) {
                iNumColonne = 1;
            }
            else {
                iNumColonne++;
            }
      
        }


    }
  
}
/// <summary>
/// Auteur: Mahdi Ellili 
///Description : Méthode qui permute les cases d'un tableau 2D
/// Date: 2022-04-29
/// </summary>
function Permuter(LigneX, ColonneX, LigneY, ColonneY) {
    //variables 
    var temp = 0;
    temp = grille[LigneX][ColonneX];
    grille[LigneX][ColonneX] = grille[LigneY][ColonneY];
    grille[LigneY][ColonneY] = temp;
}

/// <summary>
/// Auteur: Mahdi Ellili 
///Description : Méthode qui sert à mélanger un tableau 2D de manière aléatoire 400 fois.
/// Date: 2022-04-29
/// </summary>
function MelangerGrille() {
    //variables
    let Ligne = LIGNES - 1;
    let Colonne = COLONNES - 1;
    let random = 0;
    for (var icompteur = 0; icompteur <= 400; icompteur++) {
        //Tire au hasard entre 1 et 4
        random = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
        
        switch (random) {
            case 1:
                if (Ligne < 3) {
                    Permuter(Ligne, Colonne, Ligne + 1, Colonne);
                    Ligne += 1;
                }
                break;
            case 2:
                if (Ligne > 0) {
                    Permuter(Ligne, Colonne, Ligne - 1, Colonne);
                    Ligne -= 1;
                }
                break;
            case 3:
                if (Colonne < 3) {
                    Permuter(Ligne, Colonne, Ligne, Colonne+ 1);
                    Colonne += 1;
                }
                break;
            case 4:
                if (Colonne > 0) {
                    Permuter(Ligne, Colonne, Ligne, Colonne - 1);
                    Colonne -= 1;
                }
                break;
            default:
                break;
        }
    }
}

/// <summary>
/// Auteur: Mahdi Ellili 
///Description : Méthode qui sert à tourner (solutionnr) les cartes de la grille du jeu (tableau 2D).
/// Date: 2022-04-29
/// </summary>
function solutionner() {
    $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').css('background-image', 'url("/Images/' + tabImages[1] + '")').removeClass('tourner');
    $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').css('background-image', 'url("/Images/' + tabImages[1] + '")').removeClass('retourner');
    for (var ligne = 0; ligne < LIGNES; ligne++) {
        for (var colonne = 0; colonne < COLONNES; colonne++) {
            
            switch (grille[ligne][colonne]) {
                case 1:
                    $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').css('background-image', 'url("/Images/' + tabImages[1] + '")').addClass('tourner');
                    break;
                case 2:
                    $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').css('background-image', 'url("/Images/' + tabImages[2] + '")').addClass('tourner');
                    break;
                case 3:
                    $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').css('background-image', 'url("/Images/' + tabImages[3] + '")').addClass('tourner');
                    break;                                                                                                                          
                case 4:                                                                                                                             
                    $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').css('background-image', 'url("/Images/' + tabImages[4] + '")').addClass('tourner');
                    break;
                case 5:
                    $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').css('background-image', 'url("/Images/' + tabImages[5] + '")').addClass('tourner');
                    break;
                case 6:
                    $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').css('background-image', 'url("/Images/' + tabImages[6] + '")').addClass('tourner');
                    break;
                case 7:
                    $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').css('background-image', 'url("/Images/' + tabImages[7] + '")').addClass('tourner');
                    break;
                case 8:
                    $('[data-ligne="' + ligne + '"][data-colonne="' + colonne + '"]').css('background-image', 'url("/Images/' + tabImages[8] + '")').addClass('tourner');
                    break;

                default:
            }
        }
    }
}


