console.log("Hello World");

let score = 0

let pageActivated = true

while (pageActivated){
    let choix = prompt("Entrez le type de liste: mots ou phrases")


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


//  motUtilisateur = prompt("Entrez le deuxième mot : " + listeMots[1])

// if (motUtilisateur === listeMots[1]) {
//     score ++
//     console.log("Bravo ! ")
// } else {
//     console.log("Vous avez fait une erreur de frappe.")
// }

// console.log("Voici votre score: " + score)

// motUtilisateur = prompt("Entrez le troisième mot : " + listeMots[2])

// if (motUtilisateur === listeMots[2]) {
//     score ++
//     console.log("Bravo !")
// } else {
//     console.log("Vous avez fait une erreur de frappe.")
// }

// console.log("Voici votre score: " + score)