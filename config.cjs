// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Ethix-MD&Xjw1PM1U",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== true ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== true ? process.env.AUTO_DL === 'true' : true,
  AUTO_READ: process.env.AUTO_READ !== false ? process.env.AUTO_READ === 'false' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== false ? process.env.AUTO_TYPING === 'false' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== false ? process.env.AUTO_RECORDING === 'false' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== false ? process.env.ALWAYS_ONLINE === 'false' : false,
  AUTO_REACT: process.env.AUTO_REACT !== true ? process.env.AUTO_REACT === 'true' : true,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== false ? process.env.AUTO_BLOCK === 'false' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== false ? process.env.REJECT_CALL === 'false' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== true ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "✪⏤͟͞★⃝ꪶ‎AFZAAL~KHAN𖥘✪͜͡➺",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "923556159234",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== false ? process.env.WELCOME === 'false' : false, 
};


module.exports = config;
