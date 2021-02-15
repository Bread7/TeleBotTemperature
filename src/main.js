// Imports and start of application
require('dotenv').config();
require('module-alias/register')
// require('module-alias/register');
// const fastify = require('fastify');
// const helmet = require('fastify-helmet');
// const autoload = require('fastify-autoload');
// const path = require('path');
// const { sendTemperature } = require('@utils/telegram');
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.BOT_TOKEN
const bot = new TelegramBot(token, { polling: true });
const axios = require('axios');
// const parser = require('./parser.js');

// const fastify = require('fastify')({
//     logger: true
// })
  
// // Declare a route
// fastify.get('/', function (request, reply) {
//     reply.send({ hello: 'world' })
// })


bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, msg.chat.id.toString());
    console.log(msg);
});
  
// // Run the server!
// fastify.listen(3000, function (err, address) {
//     if (err) {
//       fastify.log.error(err)
//       process.exit(1)
//     }
//     fastify.log.info(`server listening on ${fastify.server.address().port}`)
// })