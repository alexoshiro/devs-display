const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

try {
    require('dotenv').config();

    const app = express();
    const server = http.Server(app);

    setupWebsocket(server);

    if (process.env.MONGO_URI) {
        mongoose.connect(process.env.MONGO_URI);
    }

    app.use(cors());
    app.use(express.json());
    app.use(routes);
    server.listen(3333);
} catch (err) {
    console.log(err);
}