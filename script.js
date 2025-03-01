document.addEventListener('DOMContentLoaded', function() {
    // Exemple de code pour intégrer Jupyter
    fetch('http://localhost:8888/notebooks/your_notebook.ipynb')
        .then(response => response.text())
        .then(data => {
            document.getElementById('jupyter-output').innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
});
document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:8888/notebooks/your_notebook.ipynb')
        .then(response => response.text())
        .then(data => {
            document.getElementById('jupyter-output').innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
});
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner le bouton par son ID
    const button = document.getElementById('myButton');

    // Ajouter un écouteur d'événements pour le clic
    button.addEventListener('click', function() {
        alert('Bouton cliqué !');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner le bouton par son ID
    const button = document.getElementById('myButton');

    // Ajouter un écouteur d'événements pour le clic
    button.addEventListener('click', function() {
        alert('Bouton cliqué !');
    });
});