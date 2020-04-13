// Hold application config

const dotenv = require('dotenv');

dotenv.config();

module.exports = {
 apiUrl: process.env.API_URL || "http://localhost:3094/graphql",
};
