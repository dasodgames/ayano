////////////////////////////////////////////////////////////////////////////////////////////
const http = require('http');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000);                                                                                  //
                                                                                             //
                                                                                            //
/////////////////////////////////////////////////////////////////////////////////////////////

const Discord = require("discord.js");
const client = new Discord.Client();
const db = require ("quick.db")
const send = require ("quick.hook")
const fs = require ("fs")
const config = require("./config.json") 
const prefix = config.prefix;
const token = config.token;
const MegaClient = require("simple-discord") 

client.on('message', async message => {
  

  client.on("warn", console.warn);
client.on("error", console.error);
client.on("disconnect", () => console.log("Bot desconectado"));
client.on("reconnect", () => console.log("Reconectando..."));

  new MegaClient.Client({
  token: "NTg1MDAwOTI5MDc4NTQyMzU4.XQo3tA.K6V6drg82Ix_uBzyWs3f3JP87EU", 
  comandos: "./comandos", 
  eventos: "./eventos"
  });
  
  client.on("message", async (message) => {
   let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  
  if(!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefixes: config.prefix
    };
  }
let prefix = prefixes[message.guild.id].prefixes;
  console.log(prefix)
});



        
        let msg = message.content.toUpperCase(); 
        let sender = message.author; 
        let args = message.content.slice(prefix.length).trim().split(" "); 
        let cmd = args.shift().toLowerCase(); 

        

        
        if (!message.content.startsWith(prefix)) return; 

        
        try {
          
          let ops = {
            ownerID: 579234820408868872,
            active: global.active
          }
          
            let commandFile = require(`./cmd/${cmd}.js`); 
            commandFile.run(client, message, args); 
        } catch (e) { 
            console.log(e.message); 
        } finally { 
            console.log(`${message.author.username} ejecuto el comando: ${cmd}`);
        }
  
  


 
client.on('message', message => {
  if (message.content.startsWith("ping")) {
   let ping = Math.floor(message.client.ping);
   message.channel.send(':ping_pong: `'+ping+' ms.`'); 
  }
  
});
  
  
 
  
  

  


});


client.on ("ready", () => {
   console.log("Registrado en Discord bajo el nombre de " + client.user.tag + " y actualmente estoy en " + client.guilds.size + " servidores.");
  });
  
  client.on("ready", () => {
    console.log('estoy listo!');
  client.user.setActivity(`a!help | He will be mine.`);
});
    
  




client.login('NTg1MDAwOTI5MDc4NTQyMzU4.XQo3tA.K6V6drg82Ix_uBzyWs3f3JP87EU');
