const functions = require('firebase-functions');
const express = require('express');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
const App = require('./App'); // Importa tu componente principal de React

const app = express();

// Middleware para servir archivos estáticos (por ejemplo, tus archivos de construcción de React)
app.use(express.static(path.resolve(__dirname, './public')));

// Ruta para manejar todas las solicitudes
app.get('*', (req, res) => {
    // Crea una instancia de StaticRouter con la ubicación actual de la solicitud
    const context = {};
    const appHtml = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );

    // Renderiza tu aplicación React en HTML y envíala como respuesta
    res.status(context.statusCode || 200).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My App</title>
        </head>
        <body>
            <div id="root">${appHtml}</div>
            <script src="/static/js/bundle.js"></script>
        </body>
        </html>
    `);
});

// Exporta la aplicación Express como una función de Firebase
exports.app = functions.https.onRequest(app);