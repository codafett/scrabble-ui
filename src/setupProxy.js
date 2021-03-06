const { createProxyMiddleware } = require('http-proxy-middleware');
const config = require('../config');

console.log(config);
const graphqlUrl = `${config.apiUrl}/graphql`;
console.log(graphqlUrl);

console.log('Setting up proxy');

module.exports = function(app) {
	app.use(
    createProxyMiddleware(
      '/graphql',
      {
        target: graphqlUrl,
      },
    ),
  );
};
