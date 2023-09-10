console.log("Hello World");

let listeMots = ["Cachalot", "Pétunia", "Serviette"]
let score = 0

let motUtilisateur = prompt("Entrez le premier mot : " + listeMots[0])

if (motUtilisateur === listeMots[0]) {
    score += 1
    console.log("Bravo !")
} else {
    console.log("Vous avez fait une erreur de frappe.")
}

console.log("Voici votre score: " + score)

 motUtilisateur = prompt("Entrez le deuxième mot : " + listeMots[1])

if (motUtilisateur === listeMots[1]) {
    score ++
    console.log("Bravo ! ")
} else {
    console.log("Vous avez fait une erreur de frappe.")
}

console.log("Voici votre score: " + score)

motUtilisateur = prompt("Entrez le troisième mot : " + listeMots[2])

if (motUtilisateur === listeMots[2]) {
    score ++
    console.log("Bravo !")
} else {
    console.log("Vous avez fait une erreur de frappe.")
}

console.log("Voici votre score: " + score)