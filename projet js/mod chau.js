let chaussur = JSON.parse(localStorage.getItem("chaussur")) || [];

// Écouteur d'événements pour le bouton de recherche
document.getElementById("searchButton").addEventListener("click", rechercherProduit);

// Fonction pour rechercher un produit
function rechercherProduit() {
    const searchName = document.getElementById("searchName").value.toLowerCase();
    const produit = chaussur.find(p => p.name.toLowerCase() === searchName);

    if (produit) {
        document.getElementById("productName").value = produit.name;
        document.getElementById("productPrice").value = produit.price;
        document.getElementById("modifierChaussureForm").style.display = "block";
    } else {
        alert("Produit non trouvé !");
        document.getElementById("modifierChaussureForm").style.display = "none";
    }
}

// Écouteur d'événements pour la soumission du formulaire
document.getElementById("modifierChaussureForm").addEventListener("submit", modifierProduit);

// Fonction pour modifier le produit
function modifierProduit(e) {
    e.preventDefault(); // Empêche le rechargement de la page

    const productName = document.getElementById("productName").value;
    const productPrice = parseFloat(document.getElementById("productPrice").value);
    const productImageInput = document.getElementById("productImage");

    const file = productImageInput.files[0];
    const reader = new FileReader();
    
    reader.onload = function () {
        const productImage = reader.result;

        // Mettre à jour le produit trouvé
        const index = chaussur.findIndex(p => p.name.toLowerCase() === productName.toLowerCase());
        if (index !== -1) {
            chaussur[index] = { name: productName, price: productPrice, image: productImage };
            localStorage.setItem("chaussur", JSON.stringify(chaussur));
            alert("Produit modifié avec succès !");
        } else {
            alert("Erreur : Produit non trouvé pour la modification !");
        }
    };

    if (file) {
        reader.readAsDataURL(file); // Lire le fichier image
    } else {
        alert("Veuillez sélectionner une image !");
    }
}
