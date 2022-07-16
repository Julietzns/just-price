// Etape 1 - Sélectionner nos éléments
let myForm = document.querySelector("#formulaire");
let myInput = document.querySelector("#prix");
// let instruction = document.querySelector("#instructions");
let error = document.querySelector("small")
let guessPrice = 0;
let chosenNumber;

// Etape 2 - Cacher l'erreur
error.style.display = "none";

// Etape 3 - Générer un nombre aléatoire en 0 et 1000
let randomNumber = Math.floor(Math.random() * 1001);

//à chaque vérification, on add un div de class : +, -, fini
//si nb est < nb aléatoir => c'est plus
//si nb est < nb aléatoir => c'est moins
//si nb est ni l'un ni l'autre => bravo
function inspect(number) {
    let instruction = document.createElement("#instructions");

    if (number < randomNumber) {
        instruction.textContent = "#" + chosenNumber + " ( " + number + " ) C'est plus !";
        instruction.className="instruction plus";
    } else if (number > randomNumber) {
        instruction.textContent = "#" + chosenNumber + " ( " + number + " ) C'est moins !";
        instruction.className="instruction moins";
    } else {
        //input se désactive quand c'est gagné
        instruction.textContent = "#" + chosenNumber + " ( " + number + " ) Bravo !";
        instruction.className="instruction fini";
        myInput.disabled = true;
    }

    //add elem devant les autres
    document.querySelector("#instruction").prepend(instruction);
}

// Etape 4 - Vérifier que l'user donne bien un nombre
//si input.value == str => afficher msg d erreur
//sinon => cacher msg d erreur
myInput.addEventListener("keyup", () => {
    if(isNaN(myInput.value)) {
        error.style.display = "inline";
    } else {
        error.style.display = "none";
    }
})

// Etape 5 - Agir à l'envoi du formulaire
//éviter d'envoyer le form dans une autre page
//on récupère l'event actuel pour l'annuler
//vérifier que myForm.value n est pas un nombre
//et verifier qu il n est pas vide
//pour mettre notre bordure de form en rouge
//sinon, bordure de form en gris
myInput.addEventListener("submit", (e) => {
    e.preventDefault();
    if(isNaN(myInput.value) || myInput.value == "") {
        myInput.style.borderColor = "#f67280";
    } else {
        guessPrice++;
        myInput.style.borderColor = "#b4aeae";
        chosenNumber = myInput.value;
        myInput.value = "";
    }
});

// Etape 6 - Créer la fonction vérifier

