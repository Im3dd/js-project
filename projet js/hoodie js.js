// Tableau pour stocker les produits dans localStorage
let produits = JSON.parse(localStorage.getItem("produits")) || [];
console.log(produits);
// Ajouter un produit via le formulaire
document.getElementById("addProductForm").addEventListener("submit", ajouterProduit);

function ajouterProduit(e) { 
    e.preventDefault(); // Empêcher le rechargement de la page
    const productName = document.getElementById("productName").value;
    const productPrice = parseFloat(document.getElementById("productPrice").value);
    const productImageInput = document.getElementById("productImage");

    const file = productImageInput.files[0];
    const reader = new FileReader();
    reader.onload = function () {
        const productImage = reader.result;

        const produit = { name: productName, price: productPrice, image: productImage };

        produits.push(produit);
        localStorage.setItem("produits", JSON.stringify(produits));

        afficherProduits();
        document.getElementById("addProductForm").reset();
    };
    reader.readAsDataURL(file);
}

// Afficher les produits dans l'interface
function afficherProduits() {
    const productList = document.getElementById("productList");
    productList.innerHTML = ""; // Effacer l'ancien contenu

    produits.forEach((produit, index) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <p><strong>${produit.name}</strong></p>
            <img src="${produit.image}" alt="${produit.name}" style="width: 100px; height: auto;">
            <p>Prix : ${produit.price} €</p>
           
            <button onclick="supprimerProduit(${index})">Supprimer</button>
        `;
        productList.appendChild(div);
    });
}
// Supprimer un produit
function supprimerProduit(index) {
    produits.splice(index, 1); // Retirer l'élément du tableau
    localStorage.setItem("produits", JSON.stringify(produits)); // Mettre à jour localStorage
    afficherProduits(); // Rafraîchir l'affichage
}

// Initialiser l'affichage
afficherProduits();