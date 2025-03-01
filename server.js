const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner le bouton par son ID
    const button = document.getElementById('inscriptionButton');

    // Ajouter un écouteur d'événements pour le clic
    button.addEventListener('click', function() {
        // Rediriger vers la page d'inscription
        window.location.href = 'inscription.html';
    });
});
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;
const clientId = 'YOU1344355172620435528';
const clientSecret = 'vwfLaK0UrnwChI1ynq9IonZJtAt-tfFv';
const redirectUri = 'http://localhost:3000/callback';

app.get('/callback', async (req, res) => {
    const code = req.query.code;
    try {
        const response = await axios.post('https://discord.com/api/oauth2/token', null, {
            params: {
                client_id: clientId,
                client_secret: clientSecret,
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: redirectUri,
                scope: 'identify'
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        const accessToken = response.data.access_token;
        const userResponse = await axios.get('https://discord.com/api/users/@me', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        const user = userResponse.data;
        res.send(`Bienvenue, ${user.username}#${user.discriminator}!`);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Erreur lors de la connexion avec Discord.');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
