// Imports and start of application
require('dotenv').config();
require('module-alias/register');
const helmet = require('fastify-helmet');
const fs = require('fs');
const autoload = require('fastify-autoload');
const middie = require('middie');
const path = require('path');
const { startBot } = require('@utils/telegram');

// Entry point
module.exports = function (fastify, opts, next) {
    // Initialize helmet for fastify
    fastify.register(helmet);

    // Initalize middleware
    fastify.register(middie);

    // Register services
    fastify.register(autoload, {
        dir: path.join(__dirname, 'services'),
        options: Object.assign({}, opts),
    });

    // Initialize telegram bot
    startBot();

    // Handle unhandledRejection errors
    // https://github.com/mcollina/make-promises-safe
    process.on('unhandledRejection', async function (reason, promise) {
        let message = 'Error Promise Handler';
        const abort = false

        if (reason.stack) {
            message = reason.stack;
        }
        console.log(message);

        if (abort === true) {
            process.abort()
        }

        process.exit(1);
    });

    // Moves on to next route
    next();
};
