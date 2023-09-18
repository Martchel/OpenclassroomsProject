function afficherResultat(score, nbMots)
{
    console.log("Vous avez trouvé "+ score+ " sur les "+ nbMots  + " mots.")
}

function choisirPhrasesOuMots()
{ 
    // Set the variable of user's choice
    let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
    // while not choosen "mots" or "phrases", we ask it again
    while (choix !== "mots" && choix !== "phrases") 
        choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
    return choix
    }

function lancerBoucleDeJeu(liste)
{
    let score =0
    for ( let i = 0; i<liste.length; i++) {

        let motUtilisateur = prompt("Entrez le premier mot : " + liste[i])

        if (motUtilisateur === liste[i]) {
            score += 1
            console.log("Bravo !")
        } else {
            console.log("Vous avez fait une erreur de frappe.")
        }
    }
    return score
}


function lancerJeu(){
    
    let choix =choisirPhrasesOuMots()
    let nbMots = 0
    let score = 0
    if (choix=== "mots"){
        score = lancerBoucleDeJeu(listeMots)
        nbMots = listeMots.length
        afficherResultat(score, nbMots)
    }else{
        score = lancerBoucleDeJeu(listPhrases)
        nbMots = listPhrases.length
        afficherResultat(score, nbMots)
        
    }

}

lancerJeu()