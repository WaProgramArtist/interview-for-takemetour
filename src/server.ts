import express from 'express';
import mongoose from 'mongoose';

const { server, database } = require('./config');

const app = express();

mongoose
    .connect(database.connectString, { useNewUrlParser: true, useCreateIndex: true })
    .then(() => {
        console.log('MongoDB connected.');
    })
    .catch((err) => {
        console.log(err);
    });

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const routes = require('./routes');
routes(app);

const serverPort = server.port;

app.listen(serverPort, () => {
    console.log(`server running on port => ${serverPort}`);
});
