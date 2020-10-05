// Hold application config

const dotenv = require('dotenv');

dotenv.config();

module.exports = {
 apiUrl: process.env.API_URL || "http://localhost:3094/graphql",
 apiSubscriptionUrl: process.env.API_SUBSCRIPTION_URL || 'ws://localhost:3094',
};
