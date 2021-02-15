'use strict'
const projectName = process.env.PROJECT_NAME || 'NS_TEMP';

module.exports = function (fastify, opts, next) {
    fastify.get('/', function (request, reply) {
        reply.send({ data: { service: `${projectName}.services`, version: 'v1'}, status: true, message: 'Server Up!'});
    });

    next();
};