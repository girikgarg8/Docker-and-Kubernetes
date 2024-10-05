const express = require('express');

const apiRoutes = require('./routes/index');

const { ServerConfig } = require('./config/index');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the flights search service on port: ${ServerConfig.PORT}`);
});