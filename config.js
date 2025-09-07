
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA61Uy4rjRhT9lVBbm7HeD0NDJFm2JbttyZb8ClmUrZJctl6WSrblwaswAyGbgVlkETqB2WWZZBXIx4T5gv6EILt7ZmCSTgciEJSqSrfOOXXOfQniBOeoh0rQfAnSDO8hQdWQlCkCTaAWvo8yUAceJBA0gdsZu+3ewm9Rp1rIDta1w3xrNNih25Ma7b5xYMRINpN+/6Rvb8C5DtJiGeLVEwWZTrZZHJ3ksIxC2tzkQ1fOeFkng8I2+16R2ulGmRqjTHLtG3CuKkKc4TjQ0zWKUAbDHiotiLPnwZd0ahbMts5EcyhnW+pQWIhtR/Lt9lHBeLAWjiIj9JKG0nGfCb+nrNa1ibjNhWW8VeOQ8Ifc6BaC7XBCB9O1mmaZ2sFOsXSFn+MgRp7hoZhgUj5b90JbD5LhqRYs1W7G9bWgkaT2Zjbf0RPDEk8jxnT6NexGg0h/HnBlOmrcbi3OaaG1EsSTE9Unat9mp0O9bSZe0nIiwzPVAX9R4gNwK3v0yva/6L4yDseT1Z/tdXO6WDll3N1vtd1Y8XhT7NGyEYy4LHRnTNmVngefeKeWyzZofWm7kjzWozSipPlsW9i+tz8t493RyZP9pM/a1Ef4kBTZUygPYbFZ2MuZYxs6o428Ft6l29v2xIfbMB2kmXD0i6WPZg6SfBZbPKmF/iJyjaUM1UFLQcsYBu2u0JnLWmzypc3EBlSVmwujLSoNDzTpcx1kKMA5ySDBSVzNMSxTB9Dbj9EqQ+QiL6BhGTdaY8syvALP5I0883oNAvd5YzAUB/3p/DDF8dE/NE7BDaiDNEtWKM+R18U5SbLyFuU5DFAOml9dbqoinaEoIcjEHmgCmWEZTmJ4mRK4L/MXhzUkOUzTFzEioA78LIluEWiSrEB1cPmB00WKZyleYRlOYTSFa4myqLc0itYFlVf4imJ0PdTBEcoJjFLQpEVeZDiepYVz/f/B0ZJaCqtJjKhVQGhVkFWKVxlNFzipzdHK0zg4+vx1HcToSK4+rtRn6TrwcZYTNy7SMIHeo8kfF+FqlRQxGZfxSqsGKAPNT6YRITgO8opZEcNstcZ7pFU8QNOHYY4+XDjKkPfI5aGJaYl38WFr3DLncxZU2KtCn2nTZOXP5Qkv22iZonleZnmRk1haqHZWC3UQw6oYuH/76rv7t69//vP3H95/c3f/0+tv7+/evLu/e3P38L774v2Pv12WXv1yf/f9H/d3b36tZHwgWOHxEIE4zEETaMbQZdaczQ9E+mjP58pYUXqKUnnwUZDHoF2N7B8UlyRzTV9wc8eK8ZhdKCaDWboPp9KkDFbGZG8JYUPaUH9XBDRBx01PbZdPxeNyVibycFCOfdEfo910k+6U+ZKRkLdTJ5NANaPeXuC68GTte2xqjyVhXIzaDjU0A1lixY2+MGM+lrqDoVKlsg48tMcr9OlhvrzCpCsLeb8Y7k7dmrxxjvPIMhaNbs+ZrTWyL/1xoelHK0ulGIXpDo8GA5tf9kc0g5dWjYZwPoVmmwrK0IUNvmWlreDaAi4tKHxo/fghnPjy6WN06aQPd/avV38FXjmUOtc/qfHQm/+hv6kzSWn3YUdZd1BHP/HcljC25iVEHjPhvr1Kulp7eaqlfsOQwbmKShpC4idZBJoAxl6WXIyVJUVleSP2kycO0xTDUO0r8xDmRPkYo8+TycjSdZeVJWkX5mvQBOxIXrBylYlSSdMxgeQxlUCpHnU+AOe/AHpSglHACAAA", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by ALI-MD", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "923003588997", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐀ɭīī 𝐈𝐍𝅦𝐗īī𝐃𝐄 ‹³策", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "6.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𓆩ု᪳𝐀ɭīī 𝐌Ɗှ᪳𓆪", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/2ka956.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ALI MD ALIVE",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
//not working for the moment do don't on it
GOODBYE: process.env.GOODBYE || "false", //not working for the moment do don't on it
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Asia/Karachi", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
