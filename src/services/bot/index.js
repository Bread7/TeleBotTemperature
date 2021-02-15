'use strict'

module.exports = function (fastify, opts, next) {
    // fastify.register(require('@services/bot/Authentication'), { prefix: '/bot/auth' });
    // fastify.register(require('@services/bot/Setup'), { prefix: '/bot/setup'});
    // fastify.register(require('@services/bot/Temperaturn'), { prefix: '/bot/temp'});
    next();
};