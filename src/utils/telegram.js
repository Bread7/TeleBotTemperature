const fs = require('fs');
const fsPromises = require('fs').promises
const password = process.env.PASSWORD;
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });
const axios = require('axios');
const encodeUrl = require('encodeurl')
 
// Ban list location
const banFileLoc = __dirname + '/../../banList'
// Regex for sending temperature
const tempRegex = '///sendtemp///'
// Data format for sending temperature
let tempData = {};
 
const startBot = function () {
    bot.onText(/\/start/, (msg) => {
        initialize(msg);
    })
    // .then(() => {
        
    // })
    bot.on('message', (msg) => {
        console.log(msg);
    })
};
 
const initialize = function (msg) {
    // Check if ban list exists
    existBanList();
 
    // Ask for pass
    bot.sendMessage(msg.chat.id, 'Password:',  { reply_markup: { force_reply: true }})
        .then((sentMsg) => {
            bot.on('message', (userReply) => {
                // console.log(authenticate(userReply.text))
                if (authenticate(userReply.text) === false){
                    addToBanList(userReply.chat.id);
                    return;
                };
                bot.sendMessage(msg.chat.id, msgTemplate());
            });
 
    });
};
 
const sendTemp = async function (userInput) {
    // Ensure validation
    let dataObj = {
        groupCode: "",
        date: "",
        meridies: "",
        memberId: "",
        temperature: "36.0",
        pin: "",
        
    }
    if(!tempMsgValidate(userInput)) {
        return false;
    } else {
        let data = userInput.substring(tempRegex.length + 2)
    }
    // Remove regex string
    
};
 
const existBanList = function () {
    // Check for file
    fs.access(banFileLoc, (err) => {
        // File does not exist, thus create it
        if (err) {
            fs.writeFile(banFileLoc, '', (err) => {
                if (err) {
                    console.log(err);
                    throw err;
                }
                console.log('Ban List File Created!');
            });
        }
        console.log('Ban List File Found!');
    });
    return;
}
 
const authenticate = function (userPass) {
    if (password != userPass) {
        return false;
    };
    return true;
};
 
const addToBanList = async function(chatId) {
    // Check if ID exists
    if (await banVerification(chatId) === true) {
        console.log('not added')
        return;
    }
    fs.appendFile(banFileLoc, chatId+'\n', (err) => {
        console.log('added')
        if (err) {
            console.log(err);
            throw err;
        }
    });
    return;
};
 
const banVerification = async function (chatId) {
    const data = await fsPromises.readFile(banFileLoc, { encoding: 'utf8' });
    if (data.includes(chatId)) {
        return true;
    }
    return false;
    // fs.readFile(banFileLoc, (err, data) => {
    //     if (err) {
    //         console.log(err);
    //         throw err;
    //     }
    //     // console.log('banverify')
    //     // console.log(typeof chatId)
    //     // console.log(data.includes(chatId))
    //     if (data.includes(chatId) === true) {
    //         return true;
    //     }
    //     return false;
    // });
};
 
const msgTemplate = function () {
    const template = `///sendtemp///
url: <url>
pin: <pin>
temp: <temp>`
    return template;
};
 
// Ensure string is validated and returns boolean
const tempMsgValidate = function (tempMsg) {
    // Find the specific string at the start of temp msg
    if (!tempMsg.startsWith(tempRegex)) {
        return false;
    }
    return true;
}
 
module.exports = {
    startBot,
};