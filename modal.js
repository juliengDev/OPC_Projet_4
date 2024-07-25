function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//-------------------------------

/* Element du DOM */

const closeBtn = document.querySelector(".close");
const modalForm = document.querySelector(".bground");
const modalBtn = document.querySelector(".btn-signup");
const modalBtn2 = document.querySelector('.hero-section > .btn-signup');
const modalConfirm = document.querySelector(".modal-confirm");
const formData = document.querySelectorAll(".formData");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const locations = document.getElementsByName("location");
const condition = document.getElementById("checkbox1");
const form = document.getElementById("reserve");
const submit = document.querySelector(".btn-submit");
const textLabel = document.querySelector('.text-label');
const btn = document.getElementById('btn');


/* Evenement du DOM */ 

// Évènement pour ouvrir le formulaire.
modalBtn.addEventListener("click", launchModal); // desktop
modalBtn2.addEventListener("click", launchModal); // mobile


// Évènement pour fermer le formulaire.
closeBtn.addEventListener("click", closeModal);




/* Fonctions */

// Ouvre le formulaire.
function launchModal() {
    modalForm.style.display = "block";  
};

// Ferme le formulaire.
function closeModal() {
  modalForm.style.display = "none";
};

// Affiche le message de confirmation a la validation du formulaire.
function confirmForm() {
   for(let i = 0; i < formData.length; i++) {
    formData[i].remove();
   }
   textLabel.innerHTML = '<p>Merci pour<br>votre inscription</p>';
   textLabel.style.textAlign = 'center';
   textLabel.style.fontSize = '1.3em';
   textLabel.style.margin = '150px auto';
   btn.setAttribute('value', 'Fermer');
  }


// Message d'erreur personnalise avec l'input concerne et un message a afficher.
function errorMessage(element, message) {

  // Creation d'un element paragraphe.
  const newP = document.createElement("p");

  // Ajoute la classe error au nouvel element.
  newP.classList.add("error");

  // Ajoute le message au nouvel element.
  newP.textContent = message;
  // Ajoute une couleur rouge au message
  newP.style.color = 'red';  

  // Injecte l'élément <p> précédemment créé à l'élément qui doit afficher l'erreur.
  element.parentNode.insertBefore(newP, element);

}

// Vérifie si le formulaire est valide à la soumission du formulaire.
function validate() {

  // Regex pour le champ nom et prénom.
  const name_regex = /^[A-zÀ-ú]+$/;

  // Regex pour le champ email.
  const mail_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // Regex pour la date de naissance
  const date_regex = /^\d{4}-\d{2}-\d{2}$/;

  //Regex pour le nombre de tournois
  const quantity_regex = /^[0-9]$/;

  // Variable pour les champs localisations
  let checked = false;


  // Supprime tous les messages d'erreur déjà present.
  // Utilisation de la fonction Array.prototype.forEach() qui permet d'exécuter une fonction donnée sur chaque élément du tableau.

  const errors = document.querySelectorAll(".error");

  errors.forEach(function(value) {
    value.remove();
  });


  // Vérifie le champ prénom, si le champ ne passe pas le teste de regex ou s'il y a moin de 2 caractères,
  // alors on affiche un message d'erreur, et on empêche la soumission du formulaire.
  if (!name_regex.test(firstName.value) || firstName.value.length < 2) {

    // Appel de la fonction errorMessage, avec en paramètre l'élément du champ prénom et le message a affiché.
    errorMessage(firstName, "Ce champ doit contenir au minimum 2 caractères !");

    // on empêche la soumission du formulaire
    return false;
  }

  


  // Pareil que pour le champ prénom, on vérifie le champ nom avec les mêmes conditions.
  // utilisation de la methode JavaScript RegExp test()
  if (!name_regex.test(lastName.value) || lastName.value.length < 2) {

    errorMessage(lastName, "Ce champ doit contenir au minimum 2 caractères !");
    return false;
  }
 


  // Vérifie le champ email, avec un test pour le regex.
  if (!mail_regex.test(email.value)) {

    errorMessage(email, "Ce champ doit contenir une adresse email valide !");
    return false;
  }
 


  // Vérifie la date de naissance, avec un test pour le regex.
  if (!date_regex.test(birthdate.value)) {

    errorMessage(birthdate, "Entrez vôtre date de naissance !");
    return false;
  }
 


  // Vérifie que le nombre de tournois est bien une valeur numérique entière ou que le champs n'est pas vide.
  
  if (!quantity_regex.test(quantity.value)  || quantity.value == "") {

    errorMessage(quantity, "Ce champ doit être une valeur numérique entier !");
    return false;
  }

  // Vérifie si une localisation est cochée.
  // On boucle sur tous les boutons radio pour les localisations
  for (let i = 0; i < locations.length; i++) {

    // Si une des localisations est cochée
    if (locations[i].checked) {

      // la variable checked devient true
      checked = true;
      break
    }
  }

  // Si la variable checked est false, alors aucune localisation n'est cochée
  if (!checked) {

    errorMessage(document.getElementById("location1"), "Une localisation doit être sélectionner !");
    return false;
  }





  // Vérifie si les conditions d'utilisation sont cochée.
  if (!condition.checked) {

    errorMessage(condition, "Vous devez accepté les conditions d'utilisation !")
    return false;
  }
  
  //* Si tout est OK */
   confirmForm(); 
   event.preventDefault();
  }
  
  































