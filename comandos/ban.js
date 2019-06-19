const MegaClient = require("simple-discord");
  
module.exports = new MegaClient.Comando({
  nombre: "Expel",
  alias: ["Ban"],
  cooldown: 5,
  permiso_cooldown: "ADMINISTRATOR",
  descripcion: "This command allows you to expel people",
  ejecutar:(client, message, args) => {
   
    let user = message.mentions.users.first();
    let razon = args.slice(1).join(' ');
        
    var perms = message.member.hasPermission("BAN_MEMBERS");
    if(!perms) return message.channel.send("`Error` `|` You aren't a teacher or the consuelor!");
        
    if (message.mentions.users.size < 1) return message.reply('You need mention some student').catch(console.error);
    if(!razon) return message.channel.send('Write a reason, `-ban @username [reason]`');
    if (!message.guild.member(user).bannable) return message.reply('I can not expel that student...');
        
    
    message.guild.member(user).ban(razon);
    message.channel.send(`**${user.username}**, was expelled from the server, reason: ${razon}.`);

    } 

    })