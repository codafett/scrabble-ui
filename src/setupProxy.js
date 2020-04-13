const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(createProxyMiddleware("/graphql", { target: "http://localhost:3094/graphql" }));
};