// On récupère le formulaire grâce à son ID
document.getElementById("loginForm").addEventListener("submit", function (e) {
    // Empêche le rechargement automatique de la page
    e.preventDefault();

    // On récupère les valeurs saisies par l'utilisateur
    const username = document.getElementById("username").value; // Nom d'utilisateur
    const password = document.getElementById("password").value; // Mot de passe

    // Vérification des identifiants
    if (username === "imad" && password === "imad") {
        document.getElementById("errorMessage").innerText = ""; // Efface le message d'erreur
        alert("Connexion réussie en tant qu'admin !");
        // Redirection vers le tableau de bord admin
        window.location.href = "choix.html";
    } else if (username === "client" && password === "client") {
        document.getElementById("errorMessage").innerText = ""; // Efface le message d'erreur
        alert("Connexion réussie en tant que client !");
        // Redirection vers le tableau de bord client
        window.location.href = "client.html";
    } else {
        // Affiche un message d'erreur si les identifiants sont incorrects
        document.getElementById("errorMessage").innerText = "Nom d'utilisateur ou mot de passe incorrect.";
    }
});