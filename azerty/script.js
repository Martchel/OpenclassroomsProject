// Display a first message
console.log("Hello World");

// Initialise score and pageActivated
let score = 0
let pageActivated = true

// Loop to know tha teven if "mots" or "phrases" is spelled wrong, the question is still asked
while (pageActivated){
    let choix = prompt("Entrez le type de liste: mots ou phrases")

// Conditions according to the word written in the prompt
    switch (choix){
        case "mots":
            for ( let i = 0; i<listeMots.length; i++) {

                let motUtilisateur = prompt("Entrez le premier mot : " + listeMots[i])

                if (motUtilisateur === listeMots[i]) {
                    score += 1
                    console.log("Bravo !")
                } else {
                    console.log("Vous avez fait une erreur de frappe.")
                }

                console.log("Voici votre score: " + score)
            }
            break
        case "phrases":
            for ( let i = 0; i<listPhrases.length; i++) {

                let motUtilisateur = prompt("Entrez le premier mot : " + listPhrases[i])

                if (motUtilisateur === listPhrases[i]) {
                    score += 1
                    console.log("Bravo !")
                } else {
                    console.log("Vous avez fait une erreur de frappe.")
                }

                console.log("Voici votre score: " + score)
            }
            break
        default: 
        console.log("Mots inccorecte")
            break
    }
}