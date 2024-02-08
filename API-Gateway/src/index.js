const express = require('express');

const app = express();

const apiRoutes = require('./routes/index');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { ServerConfig, Logger } = require('./config/index');
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 2 * 60 * 1000,
    max: 3  //in every 2 minutes window, maximum of 3 requests can be sent from an IP
})
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(limiter);

app.use('/api', apiRoutes);

app.use('/flightsSearchService', createProxyMiddleware({ 
    target: ServerConfig.SEARCH_SERVICE, 
    changeOrigin: true ,
    pathRewrite: {'^/flightsSearchService': '/'} //redirect request from localhost:GATEWAY/flightsSearchService/x to localhost:SEARCH_SERVICE/x
}));

app.use('/flightsBookingService', createProxyMiddleware({ 
    target: ServerConfig.BOOKING_SERVICE, 
    changeOrigin: true,
    pathRewrite: { '^/flightsBookingService': '/' } 
}));

app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on port: ${ServerConfig.PORT}`);
});