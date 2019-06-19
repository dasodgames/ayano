const MegaClient = require("simple-discord");

module.exports = new MegaClient.Comando({
  nombre: "kick",
  alias: ["Kick"],
  cooldown: 5,
  permiso_cooldown: "ADMINISTRATOR",
  descripcion: "This command allows you to see the ping of the Bot",
  ejecutar:(client, message, args) => {

let user = message.mentions.users.first();
let razon = args.slice(1).join(' ');

var perms = message.member.hasPermission("KICK_MEMBERS");
if(!perms) return message.channel.send("`Error` `|` You aren't a teacher or the consuelor!");
if (message.mentions.users.size < 1) return message.reply('You need to mention a user').catch(console.error);

if (!razon) return message.channel.send('Write a reason, `-kick @username [reason]`');
if (!message.guild.member(user).kickable) return message.reply('I can not kick this user... I think killing him is an a better idea...');
     
message.guild.member(user).kick(razon);
message.channel.send(`**${user.username}**, was kicked from the server, reason: ${razon}.`);
}

})