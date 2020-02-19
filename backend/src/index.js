const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

app.use(express.json());
app.use(routes);
app.listen(process.env.API_PORT);