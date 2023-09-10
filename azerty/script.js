console.log("Hello World");

let listeMots = ["Cachalot", "Pétunia", "Serviette"]
let listPhrases = ["Pas de panique!", "La vie, l'univers et le reste", "Merci pour le poisson"]
let score = 0

let choix = prompt("Entrez le type de liste: mots ou phrases")

if (choix === "mots"){
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
} else {
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